const express = require("express");
const fs = require("fs");
let allBooks = [{ name: "Emglish Book" }, { name: "Biology Book" }];
let app = express();
app.use(express.json());
app.get("/Book", async (req, res) => {
  let page = await fs.promises.readFile("./index.html", "utf-8");
  res.send(page);
});
app.get("/", (req, res) => {
  res.send("hellow World this is express appp");
});

app.delete("/deleteBook", (req, res) => {
  console.log(req.body.action, req.method);

  if (allBooks.length == 0) {
    return res.send({ message: "No Books To delete", books: [] });
  } else {
    allBooks.pop();
    res.send({
      message: "Books Weered Removed Sucsuss fully",
      books: allBooks,
    });
  }
});
app.get("/getBooks", (req, res) => {
  res.send(allBooks);
});
app.listen(1000, () => {
  console.log("The Server is running on http://localhost:1000/");
});
