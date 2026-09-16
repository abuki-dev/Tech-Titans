// validate if the get method have the autor date and the name
// fist create Expres app
// midleware to display the request logs
// serve the html and send the style request from the public file
// valdate book middleware if req.url Books and method not post next
// if the request /books post vakidate year an datuor and name if they exist then send response
const expres = require("express");
class CustomError extends Error {}
const validate = expres();
const path = require("path");
const PORT = 4050;
validate.use(expres.static(__dirname)); // serving the html file

validate.use(expres.urlencoded({ extended: true })); //form Json paring fro the submition

validate.use((req, res, next) => {
  console.log(`${req.method} to ${req.url}`);

  if (req.method === "POST" && req.url === "/books") {
    const { author, year, title } = req.body;

    console.log(req.body);
    if (!author || !author.trim() || !title || !title.trim() || isNaN(year)) {
      return next(
        new CustomError(
          "Every Data must be fulfiled and empty strings are not allowed",
        ),
      );
    }
    next();
  }

  //Other wise let us chek everyting
  next();
});
// we only use the middlde ware as cheker not respond sender
validate.post("/books", (req, res) => {
  console.log("added new Book with title " + req.body.title);
  res.json({ message: "added new Book with title " + req.body.title });
});
validate.get("/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/style.css"));
}); //serving the css file inside teh public directpry
//Error handeler
validate.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(500).send(err.message);
  }
  console.log(err.name, err.message);
  res
    .status(404)
    .send("The page you are trying to acces is not found ", err.message);
});

validate.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
