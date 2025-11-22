import React from "react";
import "../styles/base.css";
import "../styles/header.css";
import "../styles/home.css";
import "../styles/products.css";
import "../styles/cart.css";
import "../styles/payment.css";
import "../styles/responsive.css";
import Header from "./Header";
import Home from "./Home";
import CategoryPage from "./CategoryPage";
import { Route, Routes } from "react-router-dom";
import CartList from "./CartList";
import Checkout from "./Checkout";
import PaymentPage from "./Payments";

function Main() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<CategoryPage />} />
        <Route path="/women" element={<CategoryPage />} />
        <Route path="/others" element={<CategoryPage />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </>
  );
}

export default Main;
