const express = require("express");
const path = require("path");
const app = express();
const port = 1010;
//? expres static metod allows as to use teh directory or makes the given forder statics that we can send requaiest to that forlder if he getes the items requests directly retives them and sends them
app.use(express.static(path.join(__dirname, "./public")));
app.get("/", (req, res) => {
  res.send("Welcome to the static file demo!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
