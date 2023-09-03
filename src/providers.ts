import { providers } from "ethers5";
import { CurrentConfig } from "./config";

// Provider Functions

export function getProvider() {
  return new providers.JsonRpcProvider(CurrentConfig.rpc.mainnet);
}
