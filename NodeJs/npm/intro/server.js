let http = require("http");
let server = http.createServer((req, resp) => {
  resp.end("Hellow World");
});
server.listen(1000, () => {
  console.log("the server is running on port 1000");
});
