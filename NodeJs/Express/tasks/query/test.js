const e = require("express");

const app = e();

app.get("/:ab", (req, res) => {
  console.log(req.params.ab);
  res.send("You are askint the " + req.params.ab);
});

app.get("/", (req, res) => {
  console.log("Ip" + req.ip);
  res.send("<h1>Hleoow ther</h1>");
});
app.listen(5000, () => {
  console.log("Im running here 5000");
});
