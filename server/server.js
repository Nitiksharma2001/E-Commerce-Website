import express from "express"
import mongoose from "mongoose"
import router from "./routes/router.js"
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const MONGO_URL = "mongodb+srv://nitik:nitik@mernproject.turxcap.mongodb.net/?retryWrites=true&w=majority"
const connectToMONGO = async () =>{
	try{
		await mongoose.connect(MONGO_URL);
		console.log("connected to MONGO Server");
		app.use(router);
		app.listen(4000);
		
	} catch(error){
		console.log("unable to connect to MONGO Server");
	}
}
connectToMONGO();

