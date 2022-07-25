import express from "express";
import {productModel, cartModel} from "../models/models.js";
const router = express.Router();

router.get("/", (req, res) => {
  productModel.find().then((products) => {
    res.json(products)
  });
});
router.get("/cart", async (req, res) => {
  res.send(await cartModel.find());
});
router.post("/insert", async (req, res) => {
  await productModel.create(req.body);
});
router.post("/view", async (req, res) => {
  await cartModel.create(req.body);
});
router.delete("/:id", async (req, res) => {
  await cartModel.findByIdAndDelete(req.params.id);
  res.status(200).json("Deleted from cart an entry");
});
router.delete("/", async (req, res) => {
  await productModel.deleteMany({});
  res.status(200).json("Deleted all entries");
});

export default router;
