import React, {useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../context";
import axios from "axios"
import "./Cart.css"
const Cart = () => {
  const {cart, setCart} = useContext(UserContext);
  
  var cntProductsPrice = 0, cntProducts = 0;
  useEffect(() => {
    const cartList = async () => {
      const resp = await axios.get("http://localhost:4000/cart");
      const fetchProduct = resp.data.products;
      setCart(fetchProduct)
    };
    cartList();
  }, []);

  const deleteFromCart = async (product) =>{
    setCart(cart.filter((currProduct) => currProduct !== product ))
    await axios.delete(`http://localhost:4000/${product._id}`)
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.map((product) => {
        cntProducts++;
        cntProductsPrice += product.price
          return (
              <div className="product-cart" key={product._id}>
                <img src={product.imageURL}/>
                <span>{product.name}</span>
                <span>&#x20B9;{product.price}</span>
                <button onClick={(e) => {e.preventDefault(); deleteFromCart(product)}}>Delete</button>
              </div>
          ) 
      })}
      <div>
        <div>subtotal : {cntProducts}</div>
        &#x20B9;{cntProductsPrice}
      </div>
      <button>Proceed to Checkout</button>
    </>
  
  )
}

export default Cart