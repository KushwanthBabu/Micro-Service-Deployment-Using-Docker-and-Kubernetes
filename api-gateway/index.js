const express = require("express");
const axios = require("axios");

const app = express();

app.get("/users", async function (req, res) {
  const response = await axios.get("http://user-service:4000/users");
  res.json(response.data);
});

app.get("/products", async function (req, res) {
  const response = await axios.get("http://product-service:5000/products");
  res.json(response.data);
});

app.listen(3000, function () {
  console.log("API Gateway running on port 3000");
});
 
