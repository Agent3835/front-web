import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Installations from "./pages/Installations";
import Products from "./pages/Products";
import FormLogin from "./pages/FormLogin";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/installations" element={<Installations />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/FormLogin" element={<FormLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
