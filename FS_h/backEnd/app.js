const express = require("express");
const app = express();

const db = require("./db");

app.use(express.json());

app.listen(3000, () => {
  console.log("app is running on 3000");
});

app.get("/", function (req, res) {
  res.send("<h1>WhatsApp...</h1>");
});

app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
