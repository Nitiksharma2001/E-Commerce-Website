import React, {useContext, useEffect} from 'react'
import { useNavigate  } from "react-router-dom"
import { UserContext } from '../context'
import "./Shop.css"
const Shop = () => {
	const {products, setProducts, setProduct} = useContext(UserContext);
	useEffect( () => {
		fetch("http://localhost:4000/").then((response) => {
			response.json().then((data) => {
				setProducts(data);
			})
		})
	}, [])
	const navigate = useNavigate();
	const seeProduct = (product) => {
		setProduct(product);
		navigate('/view')
	}
  return (
	<div className="main-section">
		<h1>Latest Products</h1>
		<div className="products-list">
		{products.map((currProduct) => {
			return (
				<div className="product" key={currProduct._id}>
					<div>{currProduct.name}</div>
					<img src={currProduct.imageURL} />
					<div>{currProduct.description}</div>
					<div>&#x20B9; {currProduct.price}</div>
					<div>{currProduct.countInStock}</div>
					<button onClick={() => {seeProduct(currProduct)} }>View</button>
				</div>
			)
		})}
		</div>
	</div>
  )
}

export default Shop