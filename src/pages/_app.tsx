import { useEffect } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import Script from "next/dist/client/script";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GAScripts from "@/libs/GAScripts";
import { pageview } from "@/libs/gTag";
import GlobalStyles from "@/styles/GlobalStyles";
import Layout from "@/container/layouts/Layout";
import useMediaQuery from "@/hooks/useMediaQuery";
import { media } from "@/constants/breakPoints";

const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});

const App = ({
  Component,
  pageProps: { dehydratedState, ...pageProps },
}: AppProps) => {
  const router = useRouter();
  const isMobile = !useMediaQuery(media.md);
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        src="/scripts/controlColorTheme.js"
        strategy="beforeInteractive"
      />
      <GAScripts />
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
