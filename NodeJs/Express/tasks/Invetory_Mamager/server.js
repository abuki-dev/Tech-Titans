//expres to giv eproducts and get products from the admnin
// the get method must have query as key eles throw errr
// cors orgin from the frontend
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4050;
const productsRoute = require("./products.routes");

// let Us allow the cors orgin acces to our server
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  }),
);

// let us make teh jso parser both from teh form and teh fect or other requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// now let is moiut  our router below
app.use("/products", productsRoute); //

// middleware for teh main server to handel error
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
