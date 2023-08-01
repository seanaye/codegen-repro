import "../../faust.config";
import React from "react";
import { useRouter } from "next/router";
import { FaustProvider } from "@faustwp/core";
import { AppProps } from "next/app";
import '@faustwp/core/dist/css/toolbar.css';
import "../styles/globals.css";
import "../styles/preflight.css";
import "../styles/_block.scss"
import "../styles/globalStylesheet.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <FaustProvider pageProps={pageProps}>
      <Component {...pageProps} key={router.asPath} />
    </FaustProvider>
  );
}
