const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoutes = require("../routes/userRoutes");
const orderRoutes = require("../routes/orderRoutes");
const plantRoutes = require("../routes/plantRoutes");
const cors = require('cors');

mongoose
  .connect("mongodb://127.0.0.1:27017/plants")
  .then(() => console.log("connected"))
  .catch((e) => console.log(e));

app.use(cors());

app.use(express.json());

app.use("/user", userRoutes)

app.use("/order", orderRoutes)

app.use("/plant", plantRoutes)

app.get("/", async (req, res, next) => {
  res.send("Welcome");
});

app.listen(5000, () => {
  console.log("Server running ...");
});
