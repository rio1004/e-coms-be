const express = require("express");
const connectDB = require("./db");

const app = express();

connectDB();

app.use(express.json());
app.get("/", (req, res) => res.send("Welcome to E-Commerce"));

module.exports = app;
