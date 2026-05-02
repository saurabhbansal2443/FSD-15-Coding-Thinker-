import express from "express";
import ProductRouter from "./Routes/Product.routes.js";
import UserRouter from "./Routes/User.routes.js";
import ConnectDb from "./Database/index.js";
import "dotenv/config";
import User from "./Modal/user.modal.js";
const server = express();
const Port = process.env.PORT;



// password -- saurabhlmknj
// username -- saurabh

// mongodb+srv://saurabh:saurabhlmknj@cluster0.ubt0ygq.mongodb.net/
// server.use(express.static("public"))// static hosting

server.use(express.json());
server.use("/products", ProductRouter);
server.use("/user",UserRouter)

ConnectDb()
  .then(() => {
    console.log("Db connected");
    server.listen(Port, () => {
      console.log("Server started at ", Port);
    });
  })
  .catch((err) => {
    console.log(err);
  });
