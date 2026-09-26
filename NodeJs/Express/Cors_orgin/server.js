// teh corse orgin lets our serevrs to recive the requests from the trusted orgins only or listed as safe
// or we can mak it publikely avalabel withoutresterictions

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4010;

app.use(express.json());
app.use(
  cors({
    origin: "http://127.0.0.1:5501",
  }),
); // this allows evry request to be sent to the client
app.get("/", (req, res) => {
  res.json({ message: "hellow there this is Your page accesed " });
});

app.listen(PORT, () => {
  console.log("The serever is running on port http://localhost:4010");
});
