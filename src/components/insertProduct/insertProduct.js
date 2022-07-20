import React from 'react'
import { useState } from "react";
import { useNavigate  } from "react-router-dom"
import "./insertProduct.css"
const InsertProduct = ({allItem, setAllItem}) => {
const navigate = useNavigate();
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [imageUrl, setImageUrl] = useState("");
const [price, setPrice] = useState(0);
const [countInStock, setCountInStock] = useState(0);
const onSubmit = () =>{
	setAllItem([...allItem, {name, description, price, countInStock, imageUrl}])
	navigate("/");
}
  return (
	<>
		<div className="addItems">
			<div className="addItem"> Name : <input onChange={(e) => {setName(e.target.value)}} type="text" /></div>
			<div className="addItem"> Description : <input onChange={(e) => {setDescription(e.target.value)}} type="text" /></div>
			<div className="addItem"> Price : <input onChange={(e) => {setPrice(e.target.value)}} type="text" /></div>
			<div className="addItem"> Total in Stock : <input onChange={(e) => {setCountInStock(e.target.value)}} type="text" /></div>
			<div className="addItem"> ImageURL <input onChange={(e) => {setImageUrl(e.target.value)}} type="text" /></div>
			<button onClick={() => onSubmit()}>Submit</button>
		</div>
	</>
  )
}

export default InsertProduct