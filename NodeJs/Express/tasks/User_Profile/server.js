// Routher Methods
//
const express = require("express");
const app = express();
const PORT = 4000;
const path = require("path");
const userRoute = require("./users.routes");

// middlewares shoud be bebefor the roither
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Public")));
app.use("/users", userRoute); // we used the ruoter here

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
