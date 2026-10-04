// user posrtal loads slef contetn ony
require("dotenv").config();
const express = require("express");

const session = require("express-session");
const passport = require("passport");
const { Strategy } = require("passport-local");

//securtyties
const { default: helmet } = require("helmet");
const cors = require("cors");

const app = express();
const path = require("path");
const PORT = process.env.APP_PORT;

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", "https:"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
      },
      reportOnly: true,
      // this makes teh browser not bloking tem just loggn warn that they hve not to loahs
    },

    strictTransportSecurity: {
      maxAge: 3153600,
      includeSubDomains: true,
      preload: true,
    },
  }),
);
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 1000 * 60 * 60 * 12,
    },
  }),
);
// only alowed to acces ouer page but sti;; weak compared to thelmet js
app.use(
  cors({
    origin: ["http://localhost:4000"],
  }),
);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "Public")));

// iniilaize
// use setup-session
// use setion with the secret and
// paswor use locla strategy
// seialize and decerialaize
// chek autentacted
//
const alluser = [
  {
    id: 1,
    username: "jdoe",
    name: "John Doe",
    email: "jdoe@example.com",
    password: "123", // In production, use bcrypt hashes!
    role: "Admin",
  },
  {
    id: 2,
    username: "bwayne",
    name: "Bruce Wayne",
    email: "bwayne@example.com",
    password: "1",
    role: "Member",
  },
];
passport.use(
  new Strategy((username, password, done) => {
    const requestuser = alluser.find((u) => u.username === username);
    if (!requestuser) {
      return done(null, false, {
        message: "User not founded in the database ",
      });
    }

    if (requestuser.password !== password) {
      return done(null, false, { message: "Error Pasword mismatch" });
    }

    // then we can use deon user logined

    done(null, requestuser);
  }),
);
// serializer used as attachin teh user to tehe req.uses

passport.serializeUser((user, done) => {

  done(null, user.id);
});

// decreiaize chek the req.user.id if he is exit iside the database
passport.deserializeUser((id, done) => {
  const requser = alluser.find((u) => u.id === id);
  done(null, requser);
});

// now after all let us use post to the login and sucussusfaiur redirets
app.get("/", (req, res) => {
  res.redirect("/login");
});
app.get("/login", (req, res) => {
  const messages = req.session.messages || [];
  req.session.messages = [];
  res.render("login", { error: null });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    failureMessage: true,
  }),
);

app.get("/dashboard", (req, res) => {
  if (req.isAuthenticated()) {
    return res.render("dashboard", { user: req.user });
  }

  res.render("login", { error: "Sorry unautncated" });
});

app.get("/admin", (req, res) => {
  if (req.user.username !== "jdoe" || !req.isAuthenticated()) {
    return res.redirect("/dashboard");
  }
  res.render("admin", { admin: req.user });
});

app.post("/logout", (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      return next(err);
    }
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("could not logout ");
      }
      res.clearCookie("connect.sid");
      res.redirect("/login");
    });
  });
});

app.use((err, req, res, next) => {
  console.log(err.message);
  return res.redirect(req.get("Referrer") || "/");
});
app.listen(PORT, () => {
  console.log("port http://localhost:" + PORT);
});
