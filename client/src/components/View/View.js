import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./View.css";
import { UserContext } from "../context";
import axios from "axios"
const View = () => {
  const { product, cart, setCart } = useContext(UserContext)
  const navigate = useNavigate();
  const makeCart = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:4000/addtocart", product); 
    setCart([...cart, resp.data.cartProduct]);
    navigate("/cart");
  };
  return (
    <div className="single-product" >
    <div class="card" style={{width: "22rem"}}>
          <div class="card-body">
          <img src={product.imageURL} class="card-img-top img "/>
            <h5 class="card-title">{product.name}</h5>
            <p class="card-text">{product.description}</p>
            <h5 class="card-title">{product.price}</h5>
            <a href="#" onClick={ (e) => makeCart(e)} class="btn btn-primary">Add to Cart</a>
          </div>
        </div>
      
    </div>
  );
};

export default View;
