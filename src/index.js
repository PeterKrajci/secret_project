import "dotenv/config";
import express from "express";
import routes from "./routes";
import mongoose from "mongoose";
import cors from "cors";
import pino from "pino-http";
import bodyParser from "body-parser";
import adaro from "adaro";

const app = express();

const options = {
  helpers: [
    function (dust) {
      dust.helpers.myHelper = function (a, b, c, d) {};
    },
    "dustjs-helpers",
  ],
};

app.engine("dust", adaro.dust(options));
app.set("view engine", "dust");
app.set("views", "./src/templates/pages");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino());
app.use(express.static("./src/templates/pages"));

//Routes
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
