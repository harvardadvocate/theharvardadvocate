/** @jsxImportSource theme-ui */

import { ThemeProvider } from "theme-ui";
import { theme } from "./theme/theme";
import { Grid } from "theme-ui";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentItem from "./pages/ContentItem";
import Homepage from "./pages/Homepage";
import Section from "./pages/Section";
import Sidebar from "./components/Sidebar";

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
                <Route
                  element={<Section section={"Art"} />}
                  path="/art"
                  exact
                />
                <Route
                  element={<Section section={"Fiction"} />}
                  path="/fiction"
                  exact
                />
                <Route
                  element={<Section section={"Features"} />}
                  path="/features"
                  exact
                />
                <Route
                  element={<Section section={"Poetry"} />}
                  path="/poetry"
                  exact
                />
                <Route
                  element={<Section section={"Columns"} />}
                  path="/columns"
                  exact
                />
                <Route
                  element={<Section section={"Blog"} />}
                  path="/blog"
                  exact
                />
                <Route element={<ContentItem />} path="/:slug" />
              </Routes>
            </div>
          </Grid>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
