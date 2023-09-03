// This file stores web3 related constants such as addresses, token definitions, ETH currency references and ABI's

import { SUPPORTED_CHAINS, ChainId, Token } from "@uniswap/sdk-core";

// Addresses

export const POOL_FACTORY_CONTRACT_ADDRESS =
  "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const QUOTER_CONTRACT_ADDRESS =
  "0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6";

// Currencies and Tokens

export const LBR_TOKEN = new Token(
  ChainId.MAINNET,
  "0xed1167b6Dc64E8a366DB86F2E952A482D0981ebd",
  18,
  "LBR",
  "Lybra"
);

export const USDC_TOKEN = new Token(
  ChainId.MAINNET,
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  6,
  "USDC",
  "USD//C"
);
