import mongoose from "mongoose";

import "dotenv/config";

const mongodbUri = process.env.MONGODB_URI;

async function ConnectDb() {
  await mongoose.connect(mongodbUri);
}

export default ConnectDb;
