import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentItem from "./components/ContentItem";
import Homepage from "./pages/Homepage";
import Section from "./pages/Section";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Homepage />} path="/" exact />
        <Route element={<Section section={"Art"} />} path="/art" exact />
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
        <Route element={<Section section={"Poetry"} />} path="/poetry" exact />
        <Route
          element={<Section section={"Columns"} />}
          path="/columns"
          exact
        />
        <Route element={<Section section={"Blog"} />} path="/blog" exact />
        <Route element={<ContentItem />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
