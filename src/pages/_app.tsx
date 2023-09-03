import "@/styles/reset.css";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
