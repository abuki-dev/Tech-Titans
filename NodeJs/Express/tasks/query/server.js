//fist  accep the request name from the form
//parse the query from the body
// then log searching book name
//send json founded at somepoint and send him that
const express = require("express");
const path = require("path");
const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true })); // allows json formating
app.use(express.static(__dirname)); //serves any requests and resonses form this html
//1
app.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/style.css"));
});
app.get("/book/filter", (req, res) => {
  const { query } = req.query;
  console.log("Findin the book" + query);
  res.json({ meessage: "we founded a matching book with the name", query });
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
