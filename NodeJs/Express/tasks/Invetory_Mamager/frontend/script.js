// --- POST /products/addproduct ---
const addProductForm = document.getElementById("addProductForm");

addProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const name = addProductForm.elements["name"].value;
  const price = Number(addProductForm.elements["price"].value);
  const stock = Number(addProductForm.elements["stock"].value);
  console.log(addProductForm.action);
  try {
    const response = await fetch("http://localhost:4050/products/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        price,
        stock,
        actionrole: "admin",
      }),
    });

    const { message, error } = await response.json();

    if (message) {
      console.log(message);
    }
    if (error) {
      console.error(error);
    }
  } catch (err) {
    console.error(err);
  }
});

// --- GET /products?specifickey=<product name> ---
const getProductForm = document.getElementById("getProductForm");

getProductForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const params = new URLSearchParams({
    productname: getProductForm.elements["productname"].value,
    privatekey: "@BUKI0805",
  });

  try {
    const response = await fetch(`http://localhost:4050/products?${params}`);
    const { Product, Allproducts, error } = await response.json();

    if (Product) {
      console.log("The new Product : " , Product);
    }
    if (Allproducts) {
      console.trace(Allproducts);
    }
    if (error) {
      console.error(error);
    }
  } catch (err) {
    console.error(err);
  }
});
