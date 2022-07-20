import React from 'react'
import { useNavigate  } from "react-router-dom"
import "./View.css"
const View = ({product, cart, setCart}) => {
  const navigate = useNavigate();
  return (
    <div className="single-product">
        <img src={product.imageUrl} />
        <div>
          <div>{product.name}</div>
          <div>{product.description}</div>
          <div>&#x20B9; {product.price}</div>
          <button onClick={() =>{setCart([...cart, product]); navigate("/")} }>Add to cart</button>
        </div>
    </div>
  )
}

export default View