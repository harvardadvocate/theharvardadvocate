import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentItemList from "./components/ContentItemList";
import ContentItem from "./components/ContentItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ContentItemList />} path="/" exact />
        <Route element={<ContentItem />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
