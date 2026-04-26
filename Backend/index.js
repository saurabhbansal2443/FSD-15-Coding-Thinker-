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
} from "./Controller/Product.controller.js";

const server = express();

// server.use(express.static("public"))// static hosting

server.use(express.json());

server.get("/products/:id", getProuductById);
server.get("/products/search/:search", getProductBySearch);
server.get("/products", getProducts); // query params --> limit and skip
server.get("/products/category/:category", getProductByCatgeroy);
server.post("/products", createProduct);
server.patch("/products", modifyProduct);
server.put("/products/:id", replaceProduct);
server.delete("/products/:id", deleteProduct);

server.listen(8080, () => {
  console.log("Server started");
});
