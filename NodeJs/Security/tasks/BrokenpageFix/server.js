const exprees = require("express");
const helmet = require("helmet");
const crypto = require("crypto");

const app = exprees();

app.use((req, res, next) => {
  res.locals.nonce = crypto.randomBytes(16).toString("base64");
  next();
});

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: false,
    reportOnly: false,
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'", (req, res) => `'nonce-${res.locals.cspNonce}'`],
      "style-src": [
        "'self'",
        (req, res) => `'nonce-${res.locals.cspNonce}'`,
        "https://fonts.googleapis.com",
      ],
      "font-src": ["'self'", "https://fonts.gstatic.com"],
      "img-src": [
        "'self'",
        "data:",
        "https://picsum.photos",
        "https://fastly.picsum.photos",
      ],
      "connect-src": ["'self'", "https://api.github.com"],
      "object-src": ["'none'"],
      "base-uri": ["'self'"],
      "frame-ancestors": ["'none'"],
    },
  }),
);

app.get("/", (req, res) => {
  const nonce = res.locals.cspNonce;
  res.send(`<!doctype html>
<html>
<head>
  <title>Problem</title>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto&display=swap">
  <style nonce="${nonce}">body{font-family:'Roboto',sans-serif}</style>
</head>
<body>
  <h1>Hello</h1>
  <p id="zen">Loading...</p>
  <img src="https://picsum.photos/100" alt="random">

  <script nonce="${nonce}">
    fetch("https://api.github.com/zen")
      .then(r => r.text())
      .then(t => document.getElementById("zen").textContent = t);
  </script>
</body>
</html>`);
});

//prooblems
//  The Google Fonts stylesheet is blocked.
// The Roboto font file itself would be blocked too, even if the stylesheet loaded.
// The fetch to GitHub is blocked, so "Loading..." never changes.
// The image from picsum.photos is blocked.

app.listen(4000, () => {
  console.log("running");
});
