// this roiter usesse midddeware to log informations
// get mehod Sends All users avalable
// post /regester sends cheks username at the body
const express = require("express");
const userRoute = express.Router();

//Middleware that tells we touch the user module
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class InvalidinputError extends CustomError {}
class BadRequestError extends CustomError {}
userRoute.use(express.json());
userRoute.use((req, res, next) => {
  // if the request method is GET  Or post return Next
  console.log("[USER MODULE] Request received");

  if (req.method !== "POST" && req.method !== "GET") {
    return next();
  }
  if (req.method === "POST") {
    const { username, name, email } = req.body;
    if (
      !username ||
      !username.trim() ||
      !name ||
      !name.trim() ||
      !email ||
      !email.trim()
    ) {
      return next(
        new InvalidinputError(
          "Empty Inputs Are Detected pleas fill the form Carefully",
        ),
      );
    }
    return next();
  }
  // now everyting is ok can get the get Query
  const { mockusers } = req.query;
  console.log(req.query);
  console.log(mockusers);
  // we chek both the propery and the value
  if (!mockusers || mockusers !== "mock") {
    return next(new BadRequestError("400 Bad request for User mock datas"));
  }
  next();
});
userRoute.get("/", (req, res) => {
  console.log(req.query);
  res.json({ users: users });
});

//? Wecan proceed The post after filterin gusing the middleware
userRoute.post("/register", (req, res) => {
  const { name, email, username } = req.body;
  res.json({
    message: `Hellow ${name} Account created with email ${email} login and log in using username ${username} it `,
  });
});
//
//// error handeling MIDDELEWARE
userRoute.use((err, req, res, next) => {
  if (err instanceof InvalidinputError || err instanceof BadRequestError) {
    return res.status(400).json({ err: err.message });
  }
  res.status(500).json({ err: err.message + " Internal server error" });
});
const users = [
  {
    id: 1,
    username: "jdoe",
    fullName: "John Doe",
    email: "jdoe@example.com",
    role: "admin",
    active: true,
  },
  {
    id: 2,
    username: "asmith",
    fullName: "Alice Smith",
    email: "asmith@example.com",
    role: "manager",
    active: true,
  },
  {
    id: 3,
    username: "bwayne",
    fullName: "Bruce Wayne",
    email: "bwayne@example.com",
    role: "assistant",
    active: false,
  },
  {
    id: 4,
    username: "ckent",
    fullName: "Clark Kent",
    email: "ckent@example.com",
    role: "user",
    active: true,
  },
  {
    id: 5,
    username: "dprince",
    fullName: "Diana Prince",
    email: "dprince@example.com",
    role: "user",
    active: true,
  },
];
module.exports = userRoute;
