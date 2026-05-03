import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const { Schema, model } = mongoose;

const addressSchema = new Schema({
  city: String,
  pincode: Number,
  state: String,
});

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "user's name not found"],
      min: [3, "Name should contain at least 3 letter"],
      max: [25, "Maximum length is 25 for name "],
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    address: { type: [addressSchema], default: [] },
  },
  { timestamps: true },
);

userSchema.pre("save", async function () {
 
  let user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return 

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(user.password, salt);
  user.password = hashedPassword;
});

const User = model("Users", userSchema);

export default User;
