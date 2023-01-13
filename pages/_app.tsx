import type { AppProps } from "next/app";
import { ChainId, Web3sdksProvider } from "@web3sdks/react";
import "../styles/globals.css";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdksProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
    </Web3sdksProvider>
  );
}

export default MyApp;
