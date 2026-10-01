// Setup:
//   npm init -y
//   npm install express jsonwebtoken cookie-parser
//   node server.js   ->   http://localhost:3000

const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const SECRET = process.env.JWT_SECRET || "dev-secret-change-me"; // use a long random value in real life
const isProd = process.env.NODE_ENV === "production";

// Demo user. A real app reads users from a database and compares a bcrypt hash.
const USER = { id: 1, username: "abebe", password: "1234" };

const cookieOptions = {
  httpOnly: true, // JavaScript in the page can NOT read this cookie (blocks XSS theft)
  sameSite: "strict", // cookie is not sent from other sites (helps against CSRF)
  secure: isProd, // only over HTTPS in production
  maxAge: 15 * 60 * 1000, // 15 minutes, same as the token life
};

app.use(express.json()); // read JSON request bodies
app.use(cookieParser()); // fill req.cookies
app.use(express.static("public")); // serve index.html and client.js

// ---------- 1. GENERATE the token ----------
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username !== USER.username || password !== USER.password) {
    return res.status(401).json({ error: "Wrong username or password" });
  }

  // payload = data stored inside the token (never put secrets/passwords here)
  const payload = { sub: USER.id, username: USER.username };

  const token = jwt.sign(payload, SECRET, {
    algorithm: "HS256",
    expiresIn: "15m",
  });

  // SAVE option A (server side): httpOnly cookie
  res.cookie("token", token, cookieOptions);

  // SAVE option B (client side): also return it in JSON so the client can store it
  res.json({ message: "Logged in", token });
});

// ---------- 2. VERIFY the token ----------
function auth(req, res, next) {
  const header = req.headers.authorization; // "Bearer <token>"
  const token =
    header && header.startsWith("Bearer ")
      ? header.slice(7)
      : req.cookies.token;

  if (!token) return res.status(401).json({ error: "No token sent" });

  try {
    req.user = jwt.verify(token, SECRET, { algorithms: ["HS256"] });
    next();
  } catch (err) {
    const msg =
      err.name === "TokenExpiredError" ? "Token expired" : "Invalid token";
    res.status(401).json({ error: msg });
  }
}

// ---------- 3. PROTECTED route ----------
app.get("/profile", auth, (req, res) => {
  res.json({ message: `Hello ${req.user.username}`, tokenData: req.user });
});

// ---------- 4. LOGOUT ----------
app.post("/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: isProd,
  });
  res.json({ message: "Logged out" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
