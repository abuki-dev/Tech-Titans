fetch("./index.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.text(); // Convert response to text
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Fetch error:", error.message);
  });
