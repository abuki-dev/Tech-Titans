// delete Router
// 1 we wil che teh request is numbur otehr wise thros error to tell Bad request
// 2 if we pass teh previus chek if teh user is admin from the headers Unautorized Error
//3 handeler to send deleted succcusufully

const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = 3000;
class Customerror extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class InvalidIdError extends Customerror {}
class UnauthorizedActionError extends Customerror {}
class UnautorizedUserError extends Customerror {}

// let us use json parsng from both form and fethch or any others
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "Public")));

//first chek the request f its number tehrn chek if teh user is ctualy admin
app.post("/deleteitem/:id", chekNumber(), chekUser(), (req, res) => {
  res.json({ message: "Sucussfuly deleted the item " + req.params.id });
});

function chekUser() {
  return function (req, res, next) {
    const { user_role } = req.headers;
    if (!user_role) {
      return next(
        new UnautorizedUserError(
          "Oops Someting Wrong Invalid account  Refresh the page and Try agan",
        ),
      );
    } else if (user_role !== "admin") {
      return next(
        new UnauthorizedActionError("Error This action is Not allowed For you"),
      );
    }
    next();
  };
}
function chekNumber() {
  return (req, res, next) => {
    const itemid = req.params.id;
    if (isNaN(itemid)) {
      return next(
        new InvalidIdError("The id you etered is Not valid id try again"),
      );
    }
    next();
  };
}

app.use((err, req, res, next) => {
  if (
    err instanceof UnautorizedUserError ||
    err instanceof UnauthorizedActionError
  ) {
    return res.status(403).json({ ERROR: err.message });
  }
  if (err instanceof InvalidIdError) {
    return res.status(400).json({ ERROR: err.message });
  }
  res.status(500).json({ ERROR: "Internal server Error " + err.message });
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
