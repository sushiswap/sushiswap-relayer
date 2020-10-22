# SushiSwap Relayer Bot

Automated relayer bot for [Sushiswap Settlement](https://github.com/sushiswap/sushiswap-settlement).

| WARNING: This bot is in *pre-alpha* stage so it could harm your funds. Read the code and use it with caution. |
| --- |

## Download
```shell script
git clone https://github.com/sushiswap/sushiswap-relayer
```

## Install
1. Install [Node.js](https://nodejs.org/en/download/) if not installed.
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) if not installed.
3. Install dependencies.
```shell script
$ cd sushiswap-relayer
$ yarn
```

## Configure
### Provider
You need alchemy API keys.
1. Sign up [here](https://dashboard.alchemyapi.io/signup/).
2. Create two apps on Mainnet and Kovan.
3. Copy **API keys** from both networks.

### Signer
You need an ethereum account with balances.
Copy your ethereum account **private key**.

### Write .env file
Create `.env` in the project root.
```shell script
MAINNET=<Your Mainnet App API Key>
KOVAN=<Your Kovan App API Key>
PRIVATE_KEY=<Your Private Kye>
```

## Run
```shell script
$ yarn start
```

## License
MIT
