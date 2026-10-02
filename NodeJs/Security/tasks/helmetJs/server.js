// we are inetended to do lod defalut self
// the image https or self
// script self andnonsense srcs
require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const crypto = require("crypto");
const path = require("path");

//
const app = express();
const PORT = process.env.DEFAULT_PORT;

// Middleware fir the nonce
app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString("base64");
  next();
});

// now let us make the expres use the helmet

app.use((req, res, next) => {
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"], // Fixed: camelCase
      scriptSrc: [
        "'self'", // Fixed: camelCase
        "https://trusted-cdn.com",
        `'nonce-${res.locals.nonce}'`,
      ],
      imgSrc: ["'self'", "https:"], // Fixed: camelCase
    },
  });
  next();
});
// thsis makes the pusblic directory staticly avalabale
app.use(express.static(path.join(__dirname, "Public")));

// listen
app.listen(PORT, () => {
  console.log(`the express app is runnign on port ${PORT}`);
});
