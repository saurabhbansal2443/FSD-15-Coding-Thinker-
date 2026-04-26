import express from "express";
import fs from "fs";

let productData = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));

const server = express();

server.use(express.json());

// Read Operation
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
server.get("/products/search/:search", (req, res) => {
  let searchQuery = req.params.search;

  searchQuery = searchQuery.trim().toLowerCase();

  const filteredArray = productData.filter((data) =>
    data.title.trim().toLowerCase().includes(searchQuery),
  );
  res.send(filteredArray);
});
server.get("/products", (req, res) => {
  const { skip, limit } = req.query;
  if (skip && limit) {
    const products = productData.slice(skip, Number(skip) + Number(limit));
    res.send(products);
  } else if (!skip) {
    const products = productData.slice(0, limit);
    res.send(products);
  } else if (!limit) {
    const products = productData.slice(skip, Number(skip) + 30);
    res.send(products);
  } else {
    const products = productData.slice(0, 30);
    res.send(products);
  }
}); // query params --> limit and skip
server.get("/products/category/:category", (req, res) => {
  let category = req.params.category;
  category = category.trim().toLowerCase();
  const filteredArray = productData.filter((data) =>
    data.category.trim().toLowerCase().includes(category),
  );
  res.send(filteredArray);
});

// Create Operation
server.post("/products", (req, res) => {
  const product = req.body;
  const id = product?.id;
  if (!id) {
    res.send({
      product: null,
      error: "Id not provided",
    });
  }

  const isIdExist = productData.find((data) => data.id == id);

  if (isIdExist) {
    res.send({
      product: null,
      error: "Product already Exist",
    });
  } else {
    productData = [...productData, product];
    res.send({
      product: product,
      error: null,
    });
  }
});

// update --> modify/replace
// modify
server.patch("/products", (req, res) => {
  const product = req.body;
  const id = product?.id;
  if (!id) {
    res.send({
      product: null,
      error: "Id not provided",
    });
  }

  const isIdExist = productData.find((data) => data.id == id);

  if (isIdExist) {
    const updateData = { ...isIdExist, ...product };
    res.send({
      product: updateData,
      error: "Product already Exist",
    });
  } else {
    res.send({
      product: null,
      error: "ProductId is wrong ",
    });
  }
});
// replace
server.put("/products/:id", (req, res) => {
  const productId = req.params.id;
  productData[productId - 1] = req.body;

  res.send(productData[productId - 1]);
});

// delete --

server.delete("/products/:id", (req, res) => {
  const productId = req.params.id;
  const removedData = productData.splice(productId - 1, 1);
  res.send(removedData);
});

server.listen(8080, () => {
  console.log("Server started");
});
