import Ethereum from "./Ethereum";
import Pairs from "./Pairs";
import Log from "./Log";
import Orders from "./Orders";
import Executor from "./Executor";

import { Fetcher } from "@sushiswap/sdk";
import { ethers } from "ethers";

const mainnet = Ethereum.Mainnet;
const kovan = Ethereum.Kovan;

// tslint:disable-next-line:max-func-body-length
const main = async () => {
    Log.d("fetching pairs...");
    let { tokens, pairs } = await updateTokensAndPairs(mainnet.provider);

    Log.d("fetching orders...");
    const orders = await Orders.fetch(mainnet.provider, kovan.provider);
    Log.d("found " + orders.length + " orders");
    orders.forEach(order => {
        Log.d("  " + order.hash);
    });
    Orders.watch(
        async hash => {
            Log.d("order created: " + hash);
            orders.push(await Orders.fetchOrder(hash, kovan.provider));
        },
        hash => {
            Log.d("order cancelled: " + hash);
            const index = orders.findIndex(order => order.hash === hash);
            if (index >= 0) {
                orders.splice(index, 1);
            }
        },
        mainnet.provider,
        kovan.provider
    );

    const executor = new Executor(mainnet.provider);
    Log.d("listening to new blocks...");
    mainnet.provider.on("block", async blockNumber => {
        Log.d("block: " + blockNumber);
        // every 12 hours
        if (blockNumber % 2880 === 0) {
            const latest = await updateTokensAndPairs(mainnet.provider);
            tokens = latest.tokens;
            pairs = latest.pairs;
        }
        // every 1 minute
        if (blockNumber % 4 === 0) {
            try {
                const matched = await executor.match(tokens, pairs, orders, 10000);
                Log.d("matched " + matched.length + " orders");
                matched.forEach(order => {
                    const aux = order.trade
                        ? " at " +
                          order.trade?.executionPrice.toFixed(8) +
                          " " +
                          order.trade.route.path[order.trade.route.path.length - 1].symbol +
                          "/" +
                          order.trade.route.path[0].symbol
                        : "";
                    Log.d("  " + order.hash + aux);
                });
                await executor.fillOrders(matched, mainnet.wallet);
            } catch (e) {
                Log.e("error: " + e.reason || e.message || e.toString());
            }
        }
    });
    executor.watch(async hash => {
        Log.d("order filled: " + hash);
        const index = orders.findIndex(o => o.hash === hash);
        if (index >= 0) {
            const order = orders[index];
            const filledAmountIn = await executor.filledAmountIn(order);
            if (filledAmountIn.eq(order.amountIn)) {
                orders.splice(index, 1);
            }
        }
    });
};

const updateTokensAndPairs = async (provider: ethers.providers.BaseProvider) => {
    const { tokens, pairs } = await Pairs.fetch(provider);
    Log.d("found " + tokens.length + " tokens");
    tokens.forEach(token => {
        Log.d("  " + token.address);
    });
    Log.d("found " + pairs.length + " pairs");
    pairs.forEach(pair => {
        Log.d("  " + pair.liquidityToken.address);
        Pairs.watch(
            pair,
            async syncedPair => {
                const newPair = await Fetcher.fetchPairData(syncedPair.token0, syncedPair.token1, mainnet.provider);
                const index = pairs.findIndex(p => p.liquidityToken.address === syncedPair.liquidityToken.address);
                if (index >= 0) {
                    pairs.splice(index, 1, newPair);
                    Log.d("pair synced: " + syncedPair.liquidityToken.address);
                }
            },
            mainnet.provider
        );
    });
    return { tokens, pairs };
};

main().catch(e => {
    Log.e(e);
    process.exit(1);
});
