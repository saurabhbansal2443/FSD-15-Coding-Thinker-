import jwt from "jsonwebtoken";
import "dotenv/config";
import User from "../Modal/user.modal.js";

const auth = async (req, res, next) => {
  console.log("req.cookies", req.cookies);
  const token = req.cookies.Token;

  if (!token) {
    res.status(404).send({
      res: null,
      error: `auth failed`,
    });
  }
  try {
    const data = await jwt.verify(token, process.env.SECRET_KEY);

    if (data) {
      const { _id, email } = data.data;
      const user = await User.findById(_id);
      console.log("user",user)
      req.user = user;
      next();
    } else {
      res.status(404).send({
        res: null,
        error: `user not verified`,
      });
    }
  } catch (err) {
    res.status(501).send({
      res: null,
      error: `user not verified ${err}`,
    });
  }
};

export default auth;
