require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cokieparser = require("cookie-parser");
const api_router = express.Router();

api_router.use(express.urlencoded({ extended: false }));
api_router.use(express.json());
api_router.use(cokieparser());

const SECRET_JWT_SIGNATURE = process.env.PRIVATE_KEY;
const isProd = process.env.NODE_ENV;
// get the login page render the login .ejs insid etehviews so we need to use the view engine to ejs in teh maion exxpress app
api_router.get("/login", (req, res) => {
  res.render("login", { error: null });
});
const allusers = [
  {
    id: 1,
    username: "jdoe",
    name: "John Doe",
    email: "jdoe@example.com",
    password: "123",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    username: "bwayne",
    name: "Bruce Wayne",
    email: "bwayne@example.com",
    password: "1",
    image: "https://i.pravatar.cc/150?img=51",
  },
  {
    id: 3,
    username: "ckent",
    name: "Clark Kent",
    email: "ckent@example.com",
    password: "krypton!1",
    image: "https://i.pravatar.cc/150?img=33",
  },
];
api_router.post("/login", (req, res) => {
  const { username, password } = req.body;
  // chke the user exost in the database and redirec wth error messages
  const user = allusers.find((u) => u.username === username);
  if (!user) {
    return res.render("login", { error: "Error Invalid Credintials" });
  }
  if (user.password !== password) {
    return res.render("login", { error: "Password Mismatch" });
  }
  // now everytign is okay ket us sign the user and redirect them to the api dashboard
  const payload = { userId: user.id, userFullname: user.name };
  const token = jwt.sign(payload, SECRET_JWT_SIGNATURE, {
    algorithm: "HS512",
    expiresIn: "15m",
  });

  res.cookie("token", token, {
    maxAge: 15 * 60 * 1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });

  res.redirect("/api/dashboard");
});

api_router.get("/dashboard", isJwTsignaturevalid, (req, res) => {
  const decodded = req.user;
  const { username, email, name, image } = allusers.find(
    (u) => u.id === decodded.userId,
  );
  console.log(username, email);

  res.render("dashboard", { user: { username, email, name, image } });
});

function isJwTsignaturevalid(req, res, next) {
  // capture the JWT token from the request
  const token = req.cookies.token;
  if (!token) {
    return res.render("login", { error: "Page not Found" });
  }

  //Now let us chek the jwt key if its valid
  jwt.verify(token, SECRET_JWT_SIGNATURE, (err, decodded) => {
    if (err) {
      return res.status(403).render("login", { error: "Page not Found" });
    }
    // else veryting is okay and we can procced teh pas the user
    req.user = decodded;
    //
    next();
  });
}

api_router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.render("login", { error: "Loged out succussfully" });
});

module.exports = api_router;
