const http = require("node:http");

const server = http.createServer((req, res) => {
  // Home page
  if (req.url === "/") {
    res.end("Welcome to my server!");
  }

  // Users
  else if (req.url === "/users") {
    res.setHeader("Content-Type", "application/json");

    res.end(
      JSON.stringify([
        { id: 1, name: "Ahlam" },
        { id: 2, name: "Sara" },
      ]),
    );
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
