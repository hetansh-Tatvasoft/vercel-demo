const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("<h1>WhatsApp Bitches...</h1>");
});

app.listen(3000, () => {
  console.log("app is running on 3000");
});
