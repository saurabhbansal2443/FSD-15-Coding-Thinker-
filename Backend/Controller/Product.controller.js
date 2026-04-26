import fs from "fs";

let productData = JSON.parse(fs.readFileSync("./Data.json", "utf-8"));

const getProuductById = (req, res) => {
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
};

const getProductBySearch = (req, res) => {
  let searchQuery = req.params.search;

  searchQuery = searchQuery.trim().toLowerCase();

  const filteredArray = productData.filter((data) =>
    data.title.trim().toLowerCase().includes(searchQuery),
  );
  res.send(filteredArray);
};

const getProducts = (req, res) => {
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
};

const getProductByCatgeroy = (req, res) => {
  let category = req.params.category;
  category = category.trim().toLowerCase();
  const filteredArray = productData.filter((data) =>
    data.category.trim().toLowerCase().includes(category),
  );
  res.send(filteredArray);
};

const createProduct = (req, res) => {
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
};

const modifyProduct = (req, res) => {
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
};

const replaceProduct = (req, res) => {
  const productId = req.params.id;
  productData[productId - 1] = req.body;

  res.send(productData[productId - 1]);
};

const deleteProduct = (req, res) => {
  const productId = req.params.id;
  const removedData = productData.splice(productId - 1, 1);
  res.send(removedData);
};

export {
  getProductByCatgeroy,
  getProducts,
  getProuductById,
  getProductBySearch,
  replaceProduct,
  modifyProduct,
  deleteProduct,
  createProduct,
};
