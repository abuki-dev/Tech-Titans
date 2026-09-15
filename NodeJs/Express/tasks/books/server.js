const express = require("express");
const path = require("path");
const PORT = 3030;
const booksRouter = require("./books.routes");
const app = express();
app.use(express.urlencoded({ extended: true })); //allows us to use parsing the JSON automatically for post from Forms
app.use(express.json()); // fecth reeat app
app.use(express.static(path.join(__dirname, "../public"))); //serves the /public folder
app.use("/books", booksRouter);

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
