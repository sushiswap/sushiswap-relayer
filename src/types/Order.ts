import { ethers } from "ethers";
import { Trade } from "@sushiswap/sdk";

interface Order {
    hash: string;
    maker: string;
    fromToken: string;
    toToken: string;
    amountIn: ethers.BigNumber;
    amountOutMin: ethers.BigNumber;
    recipient: string;
    deadline: ethers.BigNumber;
    v: number;
    r: string;
    s: string;
    trade?: Trade;
}

export default Order;
