//--

const expres = require("express");
const productsRoute = expres.Router();
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class InvalidProductkey extends CustomError {}
class NoItemError extends CustomError {}
class UnautorizedError extends CustomError {}
class InvalidInputError extends CustomError {}
// let us use the middleware for
productsRoute.use((req, res, next) => {
  console.log("[Producst API] recived Request");
  next();
});
// exclusive Get chained middelware
productsRoute.get("/", requirequery("@BUKI0805"), chekItem(), (req, res) => {
  const item = req.item;
  console.log(item);
  res.json({ Product: item, Allproducts: products });
});

function requirequery(querykey) {
  return function (req, res, next) {
    const { privatekey } = req.query;
    if (!privatekey || privatekey !== querykey) {
      return next(
        new InvalidProductkey("Error filterig Producct With given Key"),
      );
    }
    next();
  };
}

function chekItem() {
  return function (req, res, next) {
    const { productname } = req.query;
    let filteredItem = products.find(({ name }) => name === productname);
    if (!filteredItem) {
      return next(
        new NoItemError("There is no Product with the key " + productname),
      );
    }

    req.item = filteredItem; // gives this request th eproduct tat we are finding

    next();
  };
}

const products = [
  { id: 1, name: "Wireless Mouse", price: 19.99, stock: 42 },
  { id: 2, name: "Mechanical Keyboard", price: 59.99, stock: 15 },
  { id: 3, name: "USB-C Hub", price: 24.5, stock: 0 },
  { id: 4, name: "27-inch Monitor", price: 189.0, stock: 8 },
  { id: 5, name: "Webcam 1080p", price: 34.99, stock: 23 },
  { id: 6, name: "Noise-Cancelling Headphones", price: 129.99, stock: 5 },
  { id: 7, name: "Laptop Stand", price: 27.0, stock: 31 },
  { id: 8, name: "External SSD 1TB", price: 89.99, stock: 12 },
  { id: 9, name: "Bluetooth Speaker", price: 45.0, stock: 0 },
  { id: 10, name: "Desk Lamp", price: 22.99, stock: 19 },
];

productsRoute.post(
  "/addproduct",
  checkRole("admin"),
  checkQuery(),
  (req, res) => {
    const currentProduct = req.newProduct;
    products.push(currentProduct);
    res.json({
      message: `Sucussfuly appended  [${currentProduct.name}] to products`,
    });
  },
);

function checkRole(role) {
  return function (req, res, next) {
    const { actionrole } = req.body;
    if (!actionrole || actionrole !== role) {
      return next(
        new UnautorizedError(
          `Error This action is not allowed for users With role : [${actionrole}]`,
        ),
      );
    }
    next();
  };
}
function checkQuery() {
  return function (req, res, next) {
    const { name, price, stock } = req.body;
    if (
      !name ||
      !name.trim() ||
      !price ||
      isNaN(price) ||
      !stock ||
      isNaN(stock)
    ) {
      return next(
        new InvalidInputError(
          "Error All Datas must be valid empty spacces detetd or stock ,prics are not number",
        ),
      );
    }
    // we can go frward if we checked teh wuesry dayas are exsted
    let id = products.length
      ? Math.max(...products.map(({ id }) => id)) + 1
      : 0;
    req.newProduct = { id, name, price, stock };
    next();
  };
}

productsRoute.use((err, req, res, next) => {
  // 1. Default to a generic 500 Internal Server Error
  let statusCode = 500;

  // 2. Adjust status codes based on the specific error class
  if (err instanceof InvalidProductkey || err instanceof InvalidInputError) {
    statusCode = 400; // Bad Request (the key provided was invalid)
  } else if (err instanceof NoItemError) {
    statusCode = 404; // Not Found (the requested product doesn't exist)
  } else if (err instanceof UnautorizedError) {
    statusCode = 403;
  }

  // 3. Send the response back using your requested format
  res.status(statusCode).json({
    error: err.message || "An unexpected error occurred",
  });
});

module.exports = productsRoute;
