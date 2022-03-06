const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

// import Routes
const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home");
});

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, () =>
  console.log("Connected to DB")
);

// start listening to the server
app.listen(3000);
