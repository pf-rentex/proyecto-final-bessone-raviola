import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    console.log('MongoDB Connected..');
  } catch (e) {
    console.log(`Error connecting with MongoDB, ${e}`);
  }
}
