import "@/styles/reset.css";
import "@/styles/global.css";
import { css } from "@emotion/react";
import { Nanum_Gothic } from "next/font/google";
import dynamic from "next/dynamic";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { media } from "@/constants/breakPoints";
import BackGround from "@/container/layouts/BackGround";
import Content from "@/container/layouts/Content";
import Layout from "@/container/layouts/Layout";
const GlobalHeader = dynamic(() => import("@/container/layouts/GlobalHeader"), {
  ssr: false,
});
const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});
const defaultFont = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Layout className={defaultFont.className} style={S}>
        <SideMenu />
        <div className="content-area">
          <GlobalHeader />
          <BackGround />
          <Content>
            <Component {...pageProps} />
          </Content>
        </div>
      </Layout>
    </RecoilRoot>
  );
}
const S = css`
  .content-area {
    width: 100%;
  }
  @media ${media.md} {
    .content-area {
      margin-left: auto;
      width: 80%;
      max-width: calc(100% - 220px);
    }
  }
`;
export default MyApp;
