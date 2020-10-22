import { Pair } from "@sushiswap/sdk";
import TokenAmountEntry, { fromTokenAmount, toTokenAmount } from "./TokenAmountEntry";
import TokenEntry, { fromToken } from "./TokenEntry";

export interface PairEntry {
    liquidityToken: TokenEntry;
    tokenAmount0: TokenAmountEntry;
    tokenAmount1: TokenAmountEntry;
    blockNumber: number;
}

export const toPair = (entry: PairEntry) => {
    return new Pair(toTokenAmount(entry.tokenAmount0), toTokenAmount(entry.tokenAmount1));
};

export const fromPair = (pair: Pair, blockNumber: number): PairEntry => {
    return {
        liquidityToken: fromToken(pair.liquidityToken, blockNumber),
        tokenAmount0: fromTokenAmount(pair.reserve0, blockNumber),
        tokenAmount1: fromTokenAmount(pair.reserve1, blockNumber),
        blockNumber
    };
};

export default PairEntry;
