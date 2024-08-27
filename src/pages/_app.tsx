import "@/styles/reset.css";
import "@/styles/global.css";
import GlobalStyles from "@/styles/GlobalStyles";
import dynamic from "next/dynamic";
import Script from "next/dist/client/script";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "@/container/layouts/Layout";
const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});

const App = ({ Component, pageProps }: AppProps) => {
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
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  );
};

export default App;
