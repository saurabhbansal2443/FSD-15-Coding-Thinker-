import User from "../Modal/user.modal.js";

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(409).send({
      res: null,
      error: `User ${!name ? "name ," : ""}${!email ? "email ," : ""}${!password ? "passowrd" : ""} not found `,
    });
    return;
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(403).send({
      res: null,
      error: `User already exist `,
    });
    return;
  }
  const newUser = User({ name, email, password });
  const userData = await newUser.save();
  res.status(201).send({
    res: userData,
    erorr: null,
  });
};
const login = async (req, res) => {
  const { email, password } = req.body;
  const isUserExist = await User.findOne({ email });

  if (!isUserExist) {
    res.status(404).send({
      res: null,
      error: `User doesnot exist`,
    });
  }

  const isPassowrdCorrect = await isUserExist.comparePassowrd(password);

  if (isPassowrdCorrect) {
    res.status(200).send({
      res: isUserExist,
      erorr: null,
    });
  } else {
    res.status(200).send({
      res: null,
      erorr: "EmailId/Password is wrong ",
    });
  }
};
const getUser = (req, res) => {};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

export { signup, login, getUser, updateUser, deleteUser };
