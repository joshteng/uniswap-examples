import { Token } from "@uniswap/sdk-core";
import { FeeAmount } from "@uniswap/v3-sdk";
import { USDC_TOKEN, LBR_TOKEN } from "./constants";

// Inputs that configure this example to run
export interface ExampleConfig {
  rpc: {
    local: string;
    mainnet: string;
  };
  tokens: {
    in: Token;
    amountIn: number;
    out: Token;
    poolFee: number;
  };
}

// Example Configuration

export const CurrentConfig: ExampleConfig = {
  rpc: {
    local: "http://localhost:8545",
    mainnet: "https://eth.llamarpc.com",
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1650,
    out: LBR_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
};
