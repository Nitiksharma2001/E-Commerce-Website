import React, {useContext } from "react";
import { useEffect } from "react";
import { UserContext } from "../context";
import "./Cart.css"
const Cart = () => {
  const {cart, setCart} = useContext(UserContext);
  var ans = 0, cntProducts = 0;
  useEffect(() => {
    fetch("http://localhost:4000/cart").then((response) => {
      response.json().then((data) => {
        setCart(data);
      })
    })
  }, [])
  const deleteFromCart = async (product) =>{
    await fetch(`http://localhost:4000/${product._id}`, {
      method: 'DELETE',
    })
    setCart(cart.filter((currElem) => {
      return product !== currElem
    }));
  }
  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.map((product) => {
        cntProducts++;
        ans += product.price
          return (
              <div className="product-cart">
                <img src={product.imageURL}/>
                <span>{product.name}</span>
                <span>&#x20B9;{product.price}</span>
                <button onClick={() => deleteFromCart(product)}>delete</button>
              </div>
          ) 
      })}
      <div>
        <div>subtotal : {cntProducts}</div>
        &#x20B9;{ans}
      </div>
      <button>Proceed to Checkout</button>
    </>
  
  )
}

export default Cart