import express from "express";
import ProductRouter from "./Routes/Product.routes.js";
const server = express();

// server.use(express.static("public"))// static hosting

server.use(express.json());
server.use("/products", ProductRouter);

server.listen(8080, () => {
  console.log("Server started");
});
