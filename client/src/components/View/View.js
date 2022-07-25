import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./View.css";
import { UserContext } from "../context";
const View = () => {
  const { product, cart, setCart } = useContext(UserContext)
  const navigate = useNavigate();
  const makeCart = async () => {
    setCart([...cart, product]);
    const {name, description, imageURL, price, countInStocks} = product;
    await fetch("http://localhost:4000/view", {
      method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({name, description, imageURL, price, countInStocks})
      }); 
    navigate("/");
  };
  return (
    <div className="single-product">
      <img src={product.imageURL} />
      <div>
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>&#x20B9; {product.price}</div>
        <button onClick={makeCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default View;
