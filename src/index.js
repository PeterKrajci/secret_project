const { config } = require("dotenv");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require('path');
require('dotenv').config({path: path.resolve('src', './.env')})

//Routes
app.get("/", (req, res) => {
  res.send("Chellou");
});

//Connect to DB
console.log(process.env.DB_CONNECTION);
mongoose.connect(process.env.DB_CONNECTION,
  {useNewUrlParser: true}, 
  () => console.log('Connected to DB'));

// Listen to server
app.listen(3000);

////node --exec node --experimental-specifier-resolution=node
