import "@/styles/reset.css";
import "@/styles/global.css";
import GlobalStyles from "@/styles/GlobalStyles";
import dynamic from "next/dynamic";
import Script from "next/dist/client/script";
import { AppProps } from "next/app";
import { css } from "@emotion/react";
import { RecoilRoot } from "recoil";
import { media } from "@/constants/breakPoints";
import BackGround from "@/container/layouts/BackGround";
import Content from "@/container/layouts/Content";
import Layout from "@/container/layouts/Layout";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useRouter } from "next/router";
import ColorModeButton from "@/components/common/ColorModeButton";
import {
  contentSideSpacingMb,
  contentSideSpacingPc,
  gnbSideSpacing,
} from "@/constants/size";

const GlobalHeader = dynamic(() => import("@/container/layouts/GlobalHeader"), {
  ssr: false,
});
const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const isHome = router.asPath === "/";
  const isMobile = !useMediaQuery(media.md);
  return (
    <>
      <Script
        src="/scripts/controlColorTheme.js"
        strategy="beforeInteractive"
      />
      <GlobalStyles />
      <RecoilRoot>
        <Layout>
          <SideMenu />
          <div className="content-area" css={S.contentArea}>
            {(!isHome || isMobile) && <GlobalHeader />}
            <ColorModeButton css={S.colorModeButton} />
            <BackGround />
            <Content>
              <Component {...pageProps} />
            </Content>
          </div>
        </Layout>
      </RecoilRoot>
    </>
  );
};

const S = {
  contentArea: css`
    width: 100%;
    @media ${media.md} {
      margin-left: auto;
      width: 80%;
      max-width: calc(100% - 220px);
    }
  `,
  colorModeButton: css`
    position: absolute;
    top: 16px;
    right: ${gnbSideSpacing}px;
    z-index: 100;
  `,
};

export default App;
