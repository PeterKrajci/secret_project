import "dotenv/config";
import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";
import pino from "pino-http";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino());

//Routes
app.use("/blogs", routes.blogs);

app.all("*", (_, res) => {
  res.sendStatus(404);
});

//Connect to DB
console.log(process.env.DB_CONNECTION);
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  (error) => console.log("Connected to DB", error)
);

// Listen to server
app.listen(3000);
