const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Routes
app.get("/", (req, res) => {
  res.send("Chellou");
});

//Connect to DB

// Listen to server
app.listen(3000);

////node --exec node --experimental-specifier-resolution=node
