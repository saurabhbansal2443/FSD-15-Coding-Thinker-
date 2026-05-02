import User from "../Modal/user.modal.js";

const signup = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(409).send({
      res: null,
      error: `User ${!name ? "name ," : ""}${!email ? "email ," : ""}${!password ? "passowrd" : ""} not found `,
    });
    return ; 
  }
  const userExist = await User.findOne({ email });

  if (userExist) {
    res.status(403).send({
      res: null,
      error: `User already exist `,
    });
    return ; 
  }
  const newUser = User({ name, email, password });
  const userData = await newUser.save();
  res.status(201).send({
    res: userData,
    erorr: null,
  });
};
const login = (req, res) => {};
const getUser = (req, res) => {};
const updateUser = (req, res) => {};
const deleteUser = (req, res) => {};

export { signup, login, getUser, updateUser, deleteUser };
