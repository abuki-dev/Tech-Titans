const passport = require("passport");
const express = require("express");
const session = require("express-session");
const { Strategy } = require("passport-local");
const { default: helmet } = require("helmet");
const path = require("path");
helmet.contentSecurityPolicy({ directives: {} });
const app = express();

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(
  session({
    secret: "My secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 1000 * 60 * 15,
    },
  }),
);
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

app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, "Public")));
passport.use(
  new Strategy({ usernameField: "email" }, (email, password, done) => {
    const user = allusers.find((u) => u.email === email);
    if (!user) {
      return done(null, false, { message: "User not founded" });
    }
    if (user.password !== password) {
      return done(null, false, { message: "Pasword Missmatch" });
    }
    done(null, user);
  }),
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  const user = allusers.find((u) => u.id === id);
  done(null, user);
});

app.get("/login", (req, res) => {
  res.render("login", { error: null });
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureMessage: true,
    failureRedirect: "/login",
  }),
);

app.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  const { name, email, image, id } = req.user;
  res.render("dashboard", { user: { id, name, email, image } });
});

app.post("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // clears teh session from the server express
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).send("coluld not logout");
      }
      // removes from the browser
      res.clearCookie("connect.sid");
      res.redirect("/login");
    });
  });
});

app.listen(4000, () => {
  console.log("running on port 4000");
});
// steps in authecation
// daabase chekup
// attach user in the browser (seriliziation )
// decerialaise using thay same id to chek tehuer is tahsame as teh orevois
// chek the is utentcate dusing
