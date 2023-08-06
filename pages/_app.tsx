import type { AppProps } from "next/app";
import StyledComponentsRegistry from "../lib/registry";
import * as GS from "../styles";
import "./_app.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GS.Global />
      <StyledComponentsRegistry>
        <Component {...pageProps} />
      </StyledComponentsRegistry>
    </>
  );
}
