const express = require("express");
const app = express();

app.get("/products", function (req, res) {
  res.json([{ id: 1, name: "Cricket Bat" }]);
});

app.listen(5000, function () {
  console.log("Product service running on port 5000");
});
app.get("/health", function (req, res) {
  res.status(200).json({ status: "ok" });
});
