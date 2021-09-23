import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import * as dotenv from "dotenv";
import users from "./routes/api/users";
import auth from "./routes/api/auth";
import tenants from "./routes/api/tenants";
import owners from "./routes/api/owners";
import realEstates from "./routes/api/realestates";
import authMiddleware from './middlewares/auth';

const app = express();

dotenv.config();

mongoose
  .connect(`${process.env.DATABASE_URL}`)
  .then(() => console.log("MongoDB Connected.."))
  .catch((err) => console.log(err));

app.use(cors());
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use("/api/users", users);
app.use("/api/auth", auth);
app.use("/api/tenants", authMiddleware, tenants);
app.use("/api/owners", authMiddleware, owners);
app.use("/api/realEstates", authMiddleware, realEstates);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
