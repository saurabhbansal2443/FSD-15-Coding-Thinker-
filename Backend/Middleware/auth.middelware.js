import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../Modal/user.modal.js";

const auth = async (req, res, next) => {
  console.log("req.cookie", req.cookie);
  const token = req.cookie.Token;

  if (!token) {
    res.status(404).send({
      res: null,
      error: `auth failed`,
    });
  }
  const data = await jwt.verify(token, process.env.SECRET_KEY);

  if (data) {
    const { _id, email } = data;
    const user = await User.findById(_id);
    req.user = user;
    next();
  } else {
    res.status(404).send({
      res: null,
      error: `user not verified`,
    });
  }
};

export default auth;
