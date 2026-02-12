const express = require("express");
const app = express();

app.get("/users", function (req, res) {
  res.json([{ id: 1, name: "Virat Kohli" }]);
});

app.listen(4000, function () {
  console.log("User service running on port 4000");
});
app.get("/health", function (req, res) {
  res.status(200).json({ status: "ok" });
});
