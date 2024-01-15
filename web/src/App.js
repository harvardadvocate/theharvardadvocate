/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/theme";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentItem from "./pages/ContentItem";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SectionsOverview from "./pages/SectionsOverview";
import Section from "./pages/Section";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import IssuesList from "./pages/IssuesList";
import Issue from "./pages/Issue";
import Author from "./pages/Author";
import Comp from "./pages/Comp";
import Advertise from "./pages/Advertise";
import Begley from "./pages/Begley";
import Shop from "./pages/Shop";
import Donate from "./pages/Donate";
import Search from "./pages/Search";
import Subscribe from "./pages/Subscribe";
import Submit from "./pages/Submit";
import Contact from "./pages/Contact";
import Masthead from "./pages/Masthead";
import Success from "./pages/Success";

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <div css={appSx}>
            <Sidebar />
            <div className="nonSidebarContent">
              <Routes>
                <Route element={<Homepage />} path="/" exact />
                <Route element={<About />} path="/about" exact />
                <Route element={<IssuesList />} path="/issues" exact />
                <Route element={<Issue />} path="/issues/:issueSlug" />
                <Route element={<Advertise />} path="/advertise" exact />
                <Route element={<Begley />} path="/begley" exact />
                <Route element={<Masthead />} path="/masthead" exact />
                <Route element={<Comp />} path="/comp" exact />
                <Route element={<Donate />} path="/donate" exact />
                <Route element={<Search />} path="/search" exact />
                <Route element={<Shop />} path="/shop" exact />
                <Route element={<SectionsOverview />} path="/sections" exact />
                <Route element={<Subscribe />} path="/subscribe" exact />
                <Route element={<Success />} path="/success" exact />
                <Route element={<Submit />} path="/submit" exact />
                <Route element={<Section />} path="sections/:sectionSlug" />
                <Route element={<ContentItem />} path="/content/:slug" />
                <Route element={<Author />} path="authors/:authorSlug" />
                <Route element={<Contact />} path="/contact" exact />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
