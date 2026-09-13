const express = require("express");
const fs = require("fs");
const router = require("./message");
const productsRother = require("./product");
let app = express();
app.use(express.json()); //allows us to use the .json to parse when recived the JSON automatically
app.use("/message", router);

app.use("/products", productsRother);
app.get("/", (req, res) => {
  res.send("hellow World this is express appp");
});

app.get("/status", async (req, res) => {
  let data = await fs.promises.readFile("./index.html", "utf-8");
  res.send(data);
});

app.listen(1000, () => {
  console.log("the server is running On port 1000");
});
