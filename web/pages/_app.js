/** @jsxImportSource theme-ui */
import { ThemeProvider } from "theme-ui";
import { theme } from "../lib/theme/theme";
import Sidebar from "../src/components/Sidebar";
import Footer from "../src/components/Footer";
import "../lib/theme/global.css";

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
  return (
    <ThemeProvider theme={theme}>
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
