import express from "express";
import ProductRouter from "./Routes/Product.routes.js";
import ConnectDb from "./Database/index.js";
const server = express();

// password -- saurabhlmknj
// username -- saurabh

// mongodb+srv://saurabh:saurabhlmknj@cluster0.ubt0ygq.mongodb.net/
// server.use(express.static("public"))// static hosting

server.use(express.json());
server.use("/products", ProductRouter);

ConnectDb()
  .then(() => {
    console.log("Db connected");
    server.listen(8080, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
