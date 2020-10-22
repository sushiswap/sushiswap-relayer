import { Token } from "@sushiswap/sdk";

export interface TokenEntry {
    chainId: number;
    address: string;
    decimals: number;
    symbol?: string;
    name?: string;
    blockNumber: number;
}

export const toToken = (entry: TokenEntry) => {
    return new Token(entry.chainId, entry.address, entry.decimals, entry.symbol, entry.name);
};

export const fromToken = (token: Token, blockNumber: number): TokenEntry => {
    return {
        chainId: token.chainId,
        address: token.address,
        decimals: token.decimals,
        symbol: token.symbol,
        name: token.name,
        blockNumber
    };
};

export default TokenEntry;
