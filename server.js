const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

//SETUP VIEW ENGINE
app.set("views", "./views");
app.set("view engine", "ejs");

//SETUP MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));

//STATIC FOLDER
app.use(express.static("public"));



app.get("/", (req, res) => {
  res.render("home");
});

app.get("/loginCondidat", (req, res) => {
  res.render("login_condidat");
});

app.get("/loginRecruiter", (req, res) => {
  res.render("login_recruiter");
});

app.get("/registerRecruiter", (req, res) => {
  res.render("register_recruiter");
});

app.get("/registerCondidat", (req, res) => {
  res.render("register_condidat");
});







//CONNECTION TO THE SERVER
app.listen(process.env.PORT || 3000, function () {
  console.log("connected");
});
