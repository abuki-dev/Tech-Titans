// the actual goal is to build 3 setp middlewares that actualy chek
// firstone chkes the rquest private token
// the seconde one chhes if the user is admin
// the final step is to send the message sauys profile updated

//funtion for each step taht rerurn middleware
const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

class AutoriziatonErr extends Error {}
class InvalidUserErr extends Error {}

// first the us creat verfytoken funtion
// chkes is the req hedder.xtoen my token if yes next
// otehre wise send  401 unautorized
function verfyToken() {
  // this returns middle ware
  console.log("Chekign Request Privete Token");
  return function (req, res, next) {
    const token = req.headers["x-token"];
    // let us chke if token exist and not
    if (!token || token !== "mytoken") {
      return next(
        new AutoriziatonErr(
          "401 Error The request is Not From save Browser unautorized request",
        ),
      );
    } else return next(); // now let us move to chek if the user is admin
  };
}

// create chekrolefuntion
// ceks if teh user is admin form the body["user-role"]
// if user admin next
// else 403 Forbidden

function chekUserRole(role) {
  // this also creates middleware and return it
  console.log("Chking user Role");
  return function (req, res, next) {
    const { userRole } = req.body;
    if (!userRole || userRole !== role) {
      return next(
        new InvalidUserErr(
          "Error 403 forbidden The page is not allowed for You",
        ),
      );
    } else next(); // ;et us move to the next middle ware
  };
}
// middle ware for every request
app.use((req, res, next) => {
  console.log(
    `${req.method} request To : ${req.url} OrgninalURL: ${req.originalUrl}`,
  );
  next();
});

app.use(express.json()); // allows json paring autmaticaly

// serve request from the directory
app.use(express.static(path.join(__dirname)));

// now let us use our custome cahined middleware
// the route calles the other funcions automatically no need to calll them inside
app.put(
  "/settings/security",
  verfyToken(),
  chekUserRole("admin"),
  (req, res) => {
    res.json({ message: "security  Updated Sucussufully" });
  },
);

// let us add the middleware for theError
app.use((err, req, res, next) => {
  if (err instanceof AutoriziatonErr) {
    console.log(`${req.url} sends Anautirized request`);
    return res.status(401).json({ message: err.message });
  }
  if (err instanceof InvalidUserErr) {
    console.log(`${req.url} Sends Forbbiden Request page`);
    return res.status(403).json({ message: err.message });
  }

  res
    .status(500)
    .json({ message: "Internal Server Error ", error: err.message });
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
