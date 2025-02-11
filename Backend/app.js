const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const productRoute = require("./Routes/productRoute");
const userRoute = require("./Routes/userRoute");
const dashboard = require("./Routes/dashboard");

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With, Access-Control-Allow-Origin, Origin, X-HTTP-Method-Override, Accept, X-Access-Token"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

mongoose
  .connect(
    "mongodb+srv://syed:" +
      process.env.password +
      "@cluster0.1ndmrol.mongodb.net/dash-board?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to DataBase");
  })
  .catch((error) => {
    console.log(error, "Can't connect to DataBase");
  });

app.listen(process.env.PORT || 8080, () => {
  console.log("listening on port " + process.env.PORT);
});

app.use("/api/products", productRoute);
app.use("/api/users", userRoute);
// app.use("api/", userRoute);
// app.use("/api/dashboard",dashboard)
app.get("/", (req, res) => {
  res.send("Helloo connected to Backend");
});
// console.log(process.env);

module.exports = app;
