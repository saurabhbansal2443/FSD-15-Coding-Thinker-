import express from "express";
import {
  signup,
  login,
  getUser,
  updateUser,
  deleteUser,
} from "../Controller/User.controller.js";
import User from "../Modal/user.modal.js";
import auth from "../Middleware/auth.middelware.js";

const UserRouter = express.Router();

UserRouter.post("/signup", signup)
  .post("/login", login)
  .get("/", auth, getUser)
  .patch("/update", auth, updateUser)
  .delete("/delete", auth, deleteUser);

export default UserRouter;
