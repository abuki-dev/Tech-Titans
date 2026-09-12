//firts read the html then display it at the browser
// when abrwoser sends regues submit then save tp file

const http = require("http");
const fs = require("fs");
const { error } = require("console");
let server = http.createServer(async (request, response) => {
  if (request.url == "/") {
    //wegot to do read the file html
    try {
      let data = await fs.promises.readFile("./index.html", "utf8");
      response.writeHead(200, { "content-type": "text/html" });
      response.write(data);
      response.end();
    } catch (error) {
      response.writeHead(501, { "Content-Type": "text/plain" });
      response.end("Error Redaig Html ");
      console.log(error.message);
    }
  } else if (request.url === "/register" && request.method === "POST") {
    let body = "";
    //Collcet all chenked datas
    request.on("data", (datas) => {
      body += datas.toString();
    });
    // wehn we recive a;; datas
    request.on("end", async () => {
      console.log("Resived user data usong POST");
      //saving to the file
      await fs.promises.appendFile("user.json", body, "utf-8");
      response.writeHead(200, { "content-type": "text/plain" });
      //endng teh resuers
      response.end("User Sucussfuly saved");
    });
  } else if (request.url === "/getuser" && request.method === "GET") {
    let data = await fs.promises.readFile("./user.json", "utf8");
    console.log(data);
    response.writeHead(200, { "content-type": "application/json" });
    response.end(data);
  } else {
    response.writeHead(404, { "content-type": "text/palin" });
    response.end("404 page not found");
  }
});
server.listen(5000, () => {
  console.log("The server is runnign on Port 5000");
});
