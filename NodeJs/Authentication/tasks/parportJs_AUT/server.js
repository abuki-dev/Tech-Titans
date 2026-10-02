// the goal is to cretae authencation protected profile app
//
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const { Strategy } = require("passport-local");
const morgan = require("morgan");
const path = require("path");
//
const app = express();
const PORT = process.env.APP_PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("tiny"));

app.set("view engine", "ejs");
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 10000,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, "Public")));
//Mokcl users
const allusers = [
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
    password: "@BUKI0805",
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

passport.use(
  new Strategy({ usernameField: "email" }, (email, password, done) => {
    const useremail = allusers.find((user) => user.email === email);
    // we cheked if the email exiat in teh users data base
    if (!useremail) {
      console.log("uaer not foundd");
      return done(null, false, { message: "User not found Error" });
    }
    // let us chek the password is itsmatched
    if (useremail.password !== password) {
      console.log("pasword mismatcdh");
      return done(null, false, { message: "Password Mismatch" });
    }
    console.log("hero");
    done(null, useremail);
  }),
);
// after the abouve autentcaion we use serializiation inside the cokie session some infosgrabed and stored later to chaek
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// pasport decerializer
passport.deserializeUser((id, done) => {
  const user = allusers.find((u) => u.id === id);
  done(null, user);
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/login/index.html"));
});
app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureMessage: true,
    failWithError: true,
  }),
);
app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    console.log("heh");
    return res.redirect("/login");
  }
  res.render("profile", { user: req.user });
});
app.use((err, req, res, next) => {
  console.log(err.message);
});
app.listen(PORT, () => {
  console.log("running on port " + PORT);
});
