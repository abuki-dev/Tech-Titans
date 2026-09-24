//teh goal is to chek wetehr the quesry set to teh srver contanes evrytiong (anitiziation)
// ! get  expres path morgan use json and urlencoded
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();
const PORT = 8080;

class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class MissingQueryError extends CustomError {}
class CategoryError extends CustomError {}
//let us use the json
app.use(express.static(path.join(__dirname, "Public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

app.get("/search", requireQuery(), chekItem(), (req, res) => {
  const { category } = req.query;
  res.json({ Items: shopItems[category] });
});

function requireQuery() {
  return function (req, res, next) {
    // if  are getting get request let s chek the categroy
    const { category } = req.query;
    if (!category) {
      return next(
        new MissingQueryError(`Query parameter for Item category is required!`),
      );
    }
    next();
  };
}
function chekItem() {
  return function (req, res, next) {
    const { category } = req.query;
    console.log(category);
    if (!shopItems[category]) {
      return next(
        new CategoryError(`the is no Shopable item under Category ${category}`),
      );
    }
    next();
  };
}
//
const shopItems = {
  fruits: ["apple", "banana", "orange", "mango", "grapes"],
  vegetables: ["tomato", "onion", "potato", "carrot", "spinach"],
  dairy: ["milk", "cheese", "yogurt", "butter", "eggs"],
  bakery: ["bread", "croissant", "bagel", "muffin"],
  drinks: ["water", "juice", "coffee", "tea", "soda"],
  household: ["soap", "detergent", "toilet paper", "sponge"],
};

app.use((err, req, res, next) => {
  if (err instanceof MissingQueryError) {
    return res.status(400).json({ error: err.message });
  }
  if (err instanceof CategoryError) {
    return res.status(404).json({ error: err.message });
  }
  res.status(500).json({ error: err.message + " Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
