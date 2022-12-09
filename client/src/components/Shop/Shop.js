import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context";
import axios from "axios";
import "./Shop.css";
const Shop = () => {
  const navigate = useNavigate();
  const { products, setProducts, setProduct } = useContext(UserContext);

  useEffect(() => {
    const productList = async () => {
      const resp = await axios.get("http://localhost:4000/");
      const fetchProducts = resp.data.products;
      setProducts(fetchProducts);
    };
    productList();
  }, []);

  const seeProduct = (product) => {
    setProduct(product);
    navigate("/view");
  };
  
  return (
    <div >
      <h1>Latest Products</h1>
    <div className="products-list">
      {products.map((currProduct) => {
          return (
            <div class="card" style={{width: "22rem"}} key={currProduct._id}>
            <div class="card-body">
            <img src={currProduct.imageURL} class="card-img-top img "/>
              <h5 class="card-title">{currProduct.name}</h5>
              <p class="card-text">{currProduct.description}</p>
              <h5 class="card-title">{currProduct.price}</h5>
              <p class="card-text">{currProduct.countInStock}</p>
              <a href="#" onClick={(e) => { e.preventDefault(); seeProduct(currProduct);}} class="btn btn-primary">View</a>
            </div>
          </div>
              );
        })}
        </div>
    </div>
  );
};

export default Shop;
