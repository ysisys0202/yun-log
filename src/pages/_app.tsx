import GlobalStyles from "@/styles/GlobalStyles";
import dynamic from "next/dynamic";
import Script from "next/dist/client/script";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import useMediaQuery from "@/hooks/useMediaQuery";
import { media } from "@/constants/breakPoints";
import { useEffect } from "react";
import { pageview } from "@/libs/gTag";
import { useRouter } from "next/router";
import GAScripts from "@/libs/GAScripts";
const SideMenu = dynamic(() => import("@/container/layouts/SideMenu"), {
  ssr: true,
});

const App = ({ Component, pageProps }: AppProps) => {
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
        {!isMobile && <SideMenu />}
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
