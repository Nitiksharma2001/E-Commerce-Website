import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
		name : String,
		description: String,
		price: Number,
		countInStock : Number,
		imageURL : String
	}
)

const cartSchema = new mongoose.Schema({
		name : String,
		description: String,
		price: Number,
		countInStock : Number,
		imageURL : String
	}
)
const productModel = mongoose.model("product", productSchema);
const cartModel = mongoose.model("cart", cartSchema)
export {productModel, cartModel};
// const cartSchema = new mongoose.Schema({
// 	name : {
// 		type : String,
// 		required : true
// 	},
// 	description : {
// 		type : String,
// 		required : true
// 	},
// 	price: {
// 		type : Number,
// 		required : true
// 	},
// 	countInStock: {
// 		type : Number,
// 		required : true
// 	},
// 	imageURL: {
// 		type : String,
// 		required : true
// 	},
// })