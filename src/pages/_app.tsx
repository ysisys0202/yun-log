import "@/styles/reset.css";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/container/layouts/Layout";
import GlobalHeader from "@/container/layouts/GlobalHeader";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <GlobalHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
