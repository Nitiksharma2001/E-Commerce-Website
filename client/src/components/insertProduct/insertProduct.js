import { useNavigate  } from "react-router-dom"
import "./insertProduct.css"
import React, { useState, useContext } from "react";
import { UserContext } from "../context";

const InsertProduct = () => {
const tempData = {
	name: "Cannon EOS-1D",
	imageUrl:
		"https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
	description:
		"The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
	price: 1300,
	countInStock: 5,
}
	
const [name, setName] = useState(tempData.name);
const [description, setDescription] = useState(tempData.description);
const [price, setPrice] = useState(tempData.price);
const [countInStock, setCountInStock] = useState(tempData.countInStock);
const [imageURL, setImageUrl] = useState(tempData.imageUrl);

const navigate = useNavigate();

const {products, setProducts} = useContext(UserContext);

const onSubmit = async () =>{
	const productData = { name, description, price, countInStock, imageURL } 
	setProducts([...products, productData])
    await fetch("http://localhost:4000/insert", {
		method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(productData)
    });
	navigate("/")
}
  return (
	<>
		<div className="addItems">
			<div className="addItem"> Name : <input value={name} onChange={(e) => {setName(e.target.value)}} type="text" /></div>
			<div className="addItem"> Description : <input value={description} onChange={(e) => {setDescription(e.target.value)}} type="text" /></div>
			<div className="addItem"> Price : <input value={price} onChange={(e) => {setPrice(e.target.value)}} type="text" /></div>
			<div className="addItem"> Total in Stock : <input value={countInStock} onChange={(e) => {setCountInStock(e.target.value)}} type="text" /></div>
			<div className="addItem"> ImageURL <input value={imageURL} onChange={(e) => {setImageUrl(e.target.value)}} type="text" /></div>
			<button onClick={() => onSubmit()}>Submit</button>
		</div>
	</>
  )
}

export default InsertProduct