//

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Localstrategy = require("passport-local").Strategy;
const PORT = 3000;
const app = express();

//

app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: "supersecretkey", // In production, use an environment variable!
    resave: false,
    saveUninitialized: false,
  }),
);

const allusers = [{ id:1, username: "wwee", password: "1234" }];

//
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Localstrategy((username, password, done) => {
    const user = allusers.find((u) => u.username === username);
    if (!user) {
      return done(null, false, { message: "user not found" });
    }

    if (password !== user.password) {
      return done(null, false, { message: "Pasword missmatch" });
    }

    return done(null, user);
  }),
);

passport.serializeUser((user, done) => {
  return done(null, user.id);
});
passport.deserializeUser((id, done) => {
  const user = allusers.find((u) => u.id === id);
  done(null, user);
});

app.get("/login", (req, res) => {
  res.send(`
    <h2>Login Page</h2>
    <form action="/login" method="POST">
      <input type="text" name="username" placeholder="Username" required /><br><br>
      <input type="password" name="password" placeholder="Password" required /><br><br>
      <button type="submit">Log In</button>
    </form>
  `);
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
    // failureFlash: true // (Optional: used if you want flash error messages)
  })
);

app.get("/dashboard", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/login");
  }
  res.send(`<h1>welcome user ${req.user.username}</h1>`);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
