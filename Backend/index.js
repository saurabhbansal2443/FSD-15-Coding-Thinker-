import express from "express";
import fs from "fs";

const productData = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));

const server = express();

server.get("/products/:id", (req, res) => {
  const id = req.params.id;
  if (id <= 0 || id > productData.length) {
    res.send({
      product: null,
      error: "Invalid product id",
    });
  } else {
    const data = productData[id - 1];
    res.send({
      product: data,
      error: null,
    });
  }
});
server.get("/products/:search", (req, res) => {});
server.get("/products", (req, res) => {}); // query params --> limit and skip
server.get("/products/:catgeory", (req, res) => {});

server.listen(8080, () => {
  console.log("Server started");
});
