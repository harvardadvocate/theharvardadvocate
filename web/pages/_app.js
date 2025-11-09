/** @jsxImportSource theme-ui */
import { useEffect } from "react";
import { useRouter } from "next/router";
import { ThemeProvider } from "theme-ui";
import { theme } from "../lib/theme/theme";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";
import "../lib/theme/global.css";
import { DefaultSeo } from 'next-seo';
import { DEFAULT_SEO } from '../lib/seo/defaultSEO';

const appSx = {
  display: "grid",
  gridTemplateColumns: "1fr 8fr",
  position: "relative",

  ".nonSidebarContent": {
    minWidth: "-webkit-fill-available",
    paddingBottom: "5rem" /* Footer height */,
  },
  "@media (max-width: 835px)": {
    gridTemplateColumns: "auto",
    ".nonSidebarContent": {
      width: "100vw",
    },
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  // Scroll to top on route change
  useEffect(() => {
    const handleRouteChange = () => {
      // Scroll the body element (which is the actual scroll container)
      // because html has overflow:hidden and body has overflow:auto
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <DefaultSeo {...DEFAULT_SEO} />
      <div>
        <div css={appSx}>
          <Sidebar />
          <div className="nonSidebarContent">
            <Component {...pageProps} />
            <Footer />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
