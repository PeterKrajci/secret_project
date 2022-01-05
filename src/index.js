const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("pino-http")();
const bodyParser = require("body-parser");

const path = require("path");
require("dotenv").config({ path: path.resolve("src", "./.env") });

app.use(cors());
app.use(logger);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Routes
app.get("/", (req, res) => {
  res.send("Chellou");
});

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

////node --exec node --experimental-specifier-resolution=node
