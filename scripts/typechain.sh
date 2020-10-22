#!/bin/bash

rm -rf src/contracts
typechain --target ethers-v5 --outDir src/contracts "./node_modules/@sushiswap/**/?(Settlement|OrderBook|UniswapV2*).json"
