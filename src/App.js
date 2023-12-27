import React from "react";
import Items from "./components/items";
import Header from "./components/Header";
import Createitem from "./components/Createitem";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/todo" element={<Items endpoint="?status=todo" />} />
          <Route path="/done" element={<Items endpoint="?status=done" />} />
          <Route path="/create_item" element={<Createitem />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
