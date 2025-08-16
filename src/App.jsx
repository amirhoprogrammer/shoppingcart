import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import Cards from "./Page/Cards";
import Footer from "./feathers/footer";
import Header from "./feathers/Header";
import Cart from "./Page/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="/Header" element={<Header />} />
      <Route path="/Footer" element={<Footer />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
export default App;
