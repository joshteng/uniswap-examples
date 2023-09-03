import { ChainId, Percent, Token, TradeType } from "@uniswap/sdk-core";
import {
  AlphaRouter,
  CurrencyAmount,
  SwapOptionsSwapRouter02,
  SwapType,
} from "@uniswap/smart-order-router";
import { getProvider } from "./providers";
import { fromReadableAmount } from "./conversion";
import { encodeRouteToPath } from "@uniswap/v3-sdk";
import abiDecoder from "abi-decoder";
import abi from "./swapRouter02Abi.json";

async function getRoute(inToken: Token, outToken: Token, amount: number) {
  const router = new AlphaRouter({
    chainId: ChainId.MAINNET,
    provider: getProvider(),
  });

  const options: SwapOptionsSwapRouter02 = {
    recipient: "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266",
    slippageTolerance: new Percent(50, 10_000),
    deadline: Math.floor(Date.now() / 1000 + 1800),
    type: SwapType.SWAP_ROUTER_02,
  };

  const route = await router.route(
    CurrencyAmount.fromRawAmount(
      inToken,
      fromReadableAmount(amount, inToken.decimals).toString()
    ),
    outToken,
    TradeType.EXACT_INPUT,
    options
  );

  // encodeRouteToPath(route.route, false);

  // console.log({ route });
  // console.log({ calldata: route.methodParameters?.calldata });

  abiDecoder.addABI(abi);
  const decodedData = abiDecoder.decodeMethod(route.methodParameters?.calldata);

  console.log({ decodedData });

  for (const param of decodedData.params) {
    console.log({ param });
    if (Array.isArray(param.value)) {
      for (const value of param.value) {
        const decodedData = abiDecoder.decodeMethod(value);
        console.log(JSON.stringify(decodedData, null, 1));
      }
    }
  }
  return route;
}

async function main() {
  const DAI_TOKEN = new Token(
    ChainId.MAINNET,
    "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    18,
    "DAI",
    "Dai Stablecoin"
  );

  const LBR_TOKEN = new Token(
    ChainId.MAINNET,
    "0xed1167b6Dc64E8a366DB86F2E952A482D0981ebd",
    18,
    "LBR",
    "Lybra"
  );

  await getRoute(LBR_TOKEN, DAI_TOKEN, 1);
}

main();
