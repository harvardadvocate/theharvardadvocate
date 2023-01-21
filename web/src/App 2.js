/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/theme";
import { Grid } from "theme-ui";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentItem from "./pages/ContentItem";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SectionsOverview from "./pages/SectionsOverview";
import Section from "./pages/Section";
import Sidebar from "./components/Sidebar";
import IssuesList from "./pages/IssuesList";
import Issue from "./pages/Issue";
import Author from "./pages/Author";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <BrowserRouter>
          <Grid columns={"1fr 4fr"}>
            <Sidebar />
            <div className="nonSidebarContent">
              <Routes>
                <Route element={<Homepage />} path="/" exact />
                <Route element={<About />} path="/about" exact />
                <Route element={<IssuesList />} path="/issues" exact />
                <Route element={<Issue />} path="/issues/:issueSlug" />
                <Route element={<SectionsOverview />} path="/sections" exact />
                <Route element={<Section />} path="sections/:sectionSlug" />
                <Route element={<ContentItem />} path="/:slug" />
                <Route element={<Author />} path="authors/:authorSlug" />
              </Routes>
            </div>
          </Grid>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
