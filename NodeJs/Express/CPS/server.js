const express = require("express");
const helmet = require("helmet");
const crypto = require("crypto");
const path = require("path");

const app = express();

// Middleware to generate a unique nonce per request
app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString("base64");
  next();
});

// Configure CSP using the generated nonce
app.use((req, res, next) => {
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      // Notice we use 'nonce-<value>' here
      scriptSrc: ["'self'", `'nonce-${res.locals.nonce}'`],
    },
  })(req, res, next);
});

// Serve our HTML page (we need to pass the nonce into the HTML)
app.use(express.static(path.join(__dirname, "Public")));

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
