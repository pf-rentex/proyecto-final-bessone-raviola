import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";

const app = express();

dotenv.config();

mongoose
  .connect(`${process.env.DATABASE_URL}`)
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
