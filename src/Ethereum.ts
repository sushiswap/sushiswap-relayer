import { ethers } from "ethers";

import "dotenv/config";

class Ethereum {
    provider: ethers.providers.JsonRpcProvider;
    wallet: ethers.Wallet;

    static Mainnet = new Ethereum(1, process.env.MAINNET_API_KEY, process.env.PRIVATE_KEY);
    static Kovan = new Ethereum(42, process.env.KOVAN_API_KEY, process.env.PRIVATE_KEY);

    private constructor(chainId: number, apiKey: string, privateKey: string) {
        this.provider = new ethers.providers.AlchemyProvider(chainId, apiKey);
        this.wallet = new ethers.Wallet(privateKey, this.provider);
    }
}

export default Ethereum;
