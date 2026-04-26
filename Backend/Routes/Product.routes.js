import express from "express";
import {
  getProductByCatgeroy,
  getProducts,
  getProuductById,
  getProductBySearch,
  replaceProduct,
  modifyProduct,
  deleteProduct,
  createProduct,
} from "../Controller/Product.controller.js";

const ProductRouter = express.Router();

ProductRouter.get("/:id", getProuductById)
  .get("/search/:search", getProductBySearch)
  .get("/", getProducts) // query params --> limit and skip
  .get("/category/:category", getProductByCatgeroy)
  .post("/", createProduct)
  .patch("/", modifyProduct)
  .put("/:id", replaceProduct)
  .delete("/:id", deleteProduct);

export default ProductRouter;
