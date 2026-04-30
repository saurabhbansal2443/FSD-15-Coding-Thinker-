import mongoose from "mongoose";

async function ConnectDb() {
  await mongoose.connect(
    "mongodb+srv://saurabh:saurabhlmknj@cluster0.ubt0ygq.mongodb.net/",
  );
}

export default ConnectDb;
