import express from "express";
import {
  signup,
  login,
  getUser,
  updateUser,
  deleteUser,
} from "../Controller/User.controller.js";
import User from "../Modal/user.modal.js";

const UserRouter = express.Router();

UserRouter.post("/signup", signup)
  .post("/login", signup)
  .get("/", getUser)
  .patch("/update", updateUser)
  .delete("/delete", deleteUser);

export default UserRouter;
