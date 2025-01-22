import express from "express";
import connectDB from "./db.js";

const app = express();

connectDB();

app.use(express.json());
app.get("/", (req, res) => res.send("Welcome to E-Commerce"));

export default app;
