import "dotenv/config";
import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";
import pino from "pino-http";
import bodyParser from "body-parser";
import multer from "multer";

//Configuration for Multer
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/Users/krajci/Projects/secret_project/src/photos");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `/${file.fieldname}-${Date.now()}.${ext}`);
  },
});

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino());
app.use(
  multer({
    storage: multerStorage,
  }).single("myImage")
);

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
