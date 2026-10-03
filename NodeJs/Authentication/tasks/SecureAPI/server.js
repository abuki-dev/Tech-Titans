// api dasboard and login page using jwt and cokieparsor modules
// the task when user logines chen the username and the password agans the jwt
// if the username mathche generae payload from te user secret and algorms uing jwt.sing
// after at the respose.cokie attach the currunt token and  then rediret the respone to th edashhboard
// when geting the dashboard chenk the autenctoken using middlewraere
// if user generated jwt he can pass to that again
// else login aggan session expired after chein gthe req,cockies. token name
const express = require("express");
const app = express();
const api_router = require("./api.routes");
const path = require("path");
const morgan = require("morgan");
app.use(morgan("tiny"));

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "Public")));
// first regester the api route to the exxpress app the order matters
app.use("/api", api_router);

app.get("/", (req, res) => {
  res.redirect("/api/login");
});
app.use((req, res, next) => {
  res.render("404", {
    status: 404,
    message: "Page not found",
    path: req.path,
    title: "Bad request",
  });
});

app.listen(3000, (req, res) => {
  console.log("Your app is runing http://localhost:3000");
});
