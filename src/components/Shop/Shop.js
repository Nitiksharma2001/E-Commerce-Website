import React from 'react'
import { useNavigate  } from "react-router-dom"
import "./Shop.css"
const Shop = ({allItem, setProduct}) => {
const navigate = useNavigate();
const seeProduct = (product) => {
	setProduct(product);
	navigate('/view')
}
  return (
	<div className="main-section">
		<h1>Latest Products</h1>
		<div className="products-list">
		{allItem.map((product) => {
			return (
				<div className="product">
					<div>{product.name}</div>
					<img src={product.imageUrl} />
					<div>{product.description}</div>
					<div>&#x20B9; {product.price}</div>
					<div>{product.countInStock}</div>
					<button onClick={() => {seeProduct(product)} }>View</button>
				</div>
			)
		})}
		</div>
	</div>
		
  )
}

export default Shop