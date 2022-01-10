import "dotenv/config";
import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";
import pino from "pino-http";
import bodyParser from "body-parser";
import services from "./services";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino());

//Routes
app.get("/", (req, res) => {
  res.send("Chellou");
});

app.delete("/:id", services.blogs.deleteBlogById);

app.use("/blogs", routes.blogs);

app.all("*", (_, res) => {
  res.sendStatus(404);
});

//Connect to DB
console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB")
);

// Listen to server
app.listen(3000);
