import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Navbar from "./components/Navbar/Navbar";
import Shop from "./components/Shop/Shop";
import Cart from "./components/cart/Cart";
import View from "./components/View/View";
import products from "./components/productData";
import InsertProduct from "./components/insertProduct/insertProduct";
function App() {
  const [cart, setCart] = useState([])
  const [allItem, setAllItem] = useState(products)
  const [product, setProduct] = useState({})
  return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/"element={<Shop setProduct = {setProduct} allItem = {allItem} />} />
            <Route path="/insert" element={<InsertProduct allItem = {allItem} setAllItem = {setAllItem} />} />
            <Route path="/cart" element={<Cart product = {product} setCart = {setCart} cart = {cart} />} />
            <Route path="/view"  element={<View product = {product} setCart = {setCart} cart = {cart}/>} />
          </Routes>
        </BrowserRouter>
      </>
  );
}
export default App;
