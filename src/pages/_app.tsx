import "@/styles/reset.css";
import "@/styles/global.css";
import GlobalStyles from "@/styles/GlobalStyles";
import dynamic from "next/dynamic";
import Script from "next/dist/client/script";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "@/container/layouts/Layout";
import useMediaQuery from "@/hooks/useMediaQuery";
import { media } from "@/constants/breakPoints";
const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});

const App = ({ Component, pageProps }: AppProps) => {
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
          {!isMobile && <SideMenu />}
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
};

export default App;
