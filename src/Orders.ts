import { address } from "@sushiswap/settlement/deployments/kovan/OrderBook.json";
import Settlement from "@sushiswap/settlement/deployments/mainnet/Settlement.json";
import { ethers } from "ethers";
import { OrderBookFactory, SettlementFactory } from "./contracts";
import Order from "./types/Order";

const LIMIT = 20;

export type OnCreateOrder = (hash: string) => Promise<void> | void;
export type OnCancelOrder = (hash: string) => Promise<void> | void;

class Orders {
    static async fetch(kovanProvider: ethers.providers.BaseProvider) {
        const orderBook = OrderBookFactory.connect(address, kovanProvider);
        const length = (await orderBook.numberOfAllHashes()).toNumber();
        const pages: number[] = [];
        for (let i = 0; i * LIMIT < length; i++) {
            pages.push(i);
        }
        const hashes = (
            await Promise.all(
                pages.map(async page => {
                    return await orderBook.allHashes(page, LIMIT);
                })
            )
        ).flat();
        return await Promise.all(
            hashes.filter(hash => hash !== ethers.constants.HashZero).map(hash => this.fetchOrder(hash, kovanProvider))
        );
    }

    static async fetchOrder(hash: string, kovanProvider: ethers.providers.BaseProvider) {
        const orderBook = OrderBookFactory.connect(address, kovanProvider);
        const {
            maker,
            fromToken,
            toToken,
            amountIn,
            amountOutMin,
            recipient,
            deadline,
            v,
            r,
            s
        } = await orderBook.orderOfHash(hash);
        return {
            hash,
            maker,
            fromToken,
            toToken,
            amountIn,
            amountOutMin,
            recipient,
            deadline,
            v,
            r,
            s
        } as Order;
    }

    static watch(
        onCreateOrder: OnCreateOrder,
        onCancelOrder: OnCancelOrder,
        kovanProvider: ethers.providers.BaseProvider
    ) {
        const orderBook = OrderBookFactory.connect(address, kovanProvider);
        const settlement = SettlementFactory.connect(Settlement.address, kovanProvider);
        orderBook.on("OrderCreated", onCreateOrder);
        settlement.on("OrderCanceled", onCancelOrder);
    }
}

export default Orders;
