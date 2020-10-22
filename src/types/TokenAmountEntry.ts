import { JSBI, TokenAmount } from "@sushiswap/sdk";
import TokenEntry, { fromToken, toToken } from "./TokenEntry";

export interface TokenAmountEntry {
    token: TokenEntry;
    amount: string;
    blockNumber: number;
}

export const toTokenAmount = (entry: TokenAmountEntry) => {
    return new TokenAmount(toToken(entry.token), JSBI.BigInt(entry.amount));
};

export const fromTokenAmount = (amount: TokenAmount, blockNumber: number): TokenAmountEntry => {
    return {
        token: fromToken(amount.token, blockNumber),
        amount: amount.raw.toString(),
        blockNumber
    };
};

export default TokenAmountEntry;
