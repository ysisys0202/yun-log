import "@/styles/reset.css";
import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import GlobalHeader from "@/container/layouts/GlobalHeader";
import SideMenu from "@/container/layouts/SideMenu";
import BackGround from "@/container/layouts/BackGround";
import Content from "@/container/layouts/Content";
import Layout from "@/container/layouts/Layout";
import { css } from "@emotion/react";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
      </Head>
      <Layout style={S}>
        <div className="side-area">
          <SideMenu />
        </div>
        <div className="content-area">
          <GlobalHeader />
          <BackGround />
          <Content>
            <Component {...pageProps} />
          </Content>
        </div>
      </Layout>
    </>
  );
}
const S = css`
  display: flex;
  .side-area {
    width: 20%;
    min-width: 220px;
  }
  .content-area {
    width: 80%;
  }
`;
export default MyApp;
