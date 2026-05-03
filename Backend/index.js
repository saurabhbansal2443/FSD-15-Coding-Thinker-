import express from "express";
import ProductRouter from "./Routes/Product.routes.js";
import UserRouter from "./Routes/User.routes.js";
import ConnectDb from "./Database/index.js";
import cookieParser from "cookie-parser";
import "dotenv/config";
import User from "./Modal/user.modal.js";
const server = express();
const Port = process.env.PORT;

server.use(express.json());
server.use(cookieParser());
server.use("/products", ProductRouter);
server.use("/users", UserRouter);

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
