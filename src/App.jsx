import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Cards from "./Page/Cards";
import Footer from "./feathers/footer";
import Header from "./feathers/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Footer" element={<Footer />} />
    </Routes>
  );
}
export default App;
