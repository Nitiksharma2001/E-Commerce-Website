import React from 'react'
import { useState } from 'react'
import "./Cart.css"
const Cart = ({cart, setCart}) => {
  var ans = 0, cntProducts = 0;
  return (
    <>
      <h1>Shopping Cart</h1>
      {cart.map((product) => {
        cntProducts++;
        ans += product.price
          return (
            <>
              <div className="product-cart">
                <img src={product.imageUrl}/>
                <span>{product.name}</span>
                <span>&#x20B9;{product.price}</span>
                <button onClick={() => setCart(cart.filter((currElem) => {return product !== currElem}))}>delete</button>
              </div>
            </>
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