import "@/styles/reset.css";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalHeader from "@/container/layouts/GlobalHeader";
import BackGround from "@/container/layouts/BackGround";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <GlobalHeader />
      <BackGround />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
