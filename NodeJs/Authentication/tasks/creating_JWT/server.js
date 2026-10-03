// create simpllle exprss server nd send the jwt to the client
// create atoken for the rewusets that logined if tehuser nan name is mathced witht the given data
require("dotenv").config();
const express = require("express");
const jwt = require("jsonwebtoken");
const cokiparser = require("cookie-parser");
const { default: helmet } = require("helmet");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cokiparser()); // this alloews us to read teh req.cokies
const SECRET_SIGNATURE = process.env.SECRET_KEY;

// Mock Database
const users = [
  {
    id: 1,
    name: "John Doe",
    email: "jdoe@example.com",
    password: "password123",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Abuki kira",
    email: "abubekra04@gmail.com",
    password: "11",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 3,
    name: "Bruce Wayne",
    email: "bwayne@example.com",
    password: "batcave2024",
    image: "https://i.pravatar.cc/150?img=51",
  },
  {
    id: 4,
    name: "Clark Kent",
    email: "ckent@example.com",
    password: "krypton!1",
    image: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: 5,
    name: "Diana Prince",
    email: "dprince@example.com",
    password: "themyscira",
    image: "https://i.pravatar.cc/150?img=47",
  },
];
app.use(express.static(path.join(__dirname, "Public")));
app.set("view engine", "ejs");
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user || user.password !== password) {
    return res.render("login", {
      error: "Password missmatch or username not found",
    });
  }

  const payload = { userId: user.id, username: user.username };
  const jwtToken = await jwt.sign(payload, SECRET_SIGNATURE, {
    expiresIn: "15m",
    algorithm: "HS512",
  });

  res.cookie("token", jwtToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });
  res.redirect("/api/dashboard");
});

// verfy teh jwt token
async function verfyJwtToken(req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.render("login", { error: "Access denied No token provided" });
  }
  await jwt.verify(
    token,
    SECRET_SIGNATURE,
    { algorithms: ["HS512"] },
    (err, decoded) => {
      if (err) {
        return res.render("login", { error: "Acceses Invoked Token Expired " });
      }
      req.user = decoded;
      next();
    },
  );
}
app.get("/", (req, res) => {
  res.redirect("/api/login");
});
app.get("/api/login", (req, res) => {
  res.render("login", { error: null });
});

// rendering after autehcation
app.get("/api/dashboard", verfyJwtToken, (req, res) => {
  const user = users.find((u) => u.id === req.user.userId);
  res.render("dashboard", { token: req.cookies.token, user });
});
app.post("/api/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
  });
  res.render("login", { error: "Loged out sucussfully" });
});
app.use((err, req, res, next) => {
  console.log(err.message);
});
app.listen(3000, () => {
  console.log("Secure JWT Cookie server running on http://localhost:3000");
});
