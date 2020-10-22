import { Fetcher, Pair, Token } from "@sushiswap/sdk";
import { ethers } from "ethers";
import fetch from "node-fetch";
import TokenEntry, { toToken } from "./types/TokenEntry";
import { UniswapV2PairFactory } from "./contracts";
import { UniswapV2Pair } from "./contracts/UniswapV2Pair";

export type OnSync = (pair: Pair) => Promise<void> | void;

const contracts: { [address: string]: UniswapV2Pair } = {};

class Pairs {
    static watch(pair: Pair, onSync: OnSync, provider: ethers.providers.BaseProvider) {
        const { address } = pair.liquidityToken;
        let contract = contracts[address];
        if (!contract) {
            contract = UniswapV2PairFactory.connect(address, provider);
            contracts[address] = contract;
        }
        contract.removeAllListeners("Sync");
        contract.on("Sync", () => onSync(pair));
    }

    static async fetch(provider: ethers.providers.BaseProvider) {
        const res = await fetch("https://lite.sushiswap.fi/tokens.json");
        const { tokens }: { tokens: TokenEntry[] } = await res.json();
        const tokenCombinations: [Token, Token][] = [];
        for (const entryA of tokens) {
            const tokenA = toToken(entryA);
            for (const entryB of tokens) {
                const tokenB = toToken(entryB);
                if (tokenA.address !== tokenB.address && tokenA.sortsBefore(tokenB)) {
                    tokenCombinations.push([tokenA, tokenB]);
                }
            }
        }
        const pairs = await Promise.all(
            tokenCombinations.map(async pair => {
                const [tokenA, tokenB] = pair;
                try {
                    return await Fetcher.fetchPairData(tokenA, tokenB, provider);
                } catch (e) {
                    return null;
                }
            })
        );
        return { tokens: tokens.map(token => toToken(token)), pairs: pairs.filter(pair => pair != null) };
    }
}

export default Pairs;
