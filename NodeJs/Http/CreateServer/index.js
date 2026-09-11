//Import an Http module
const Http = require("http");
//Lte us use the method Create server from the http module

let server = Http.createServer((req, res) => {
  res.end(Display(req.url));
});
function Display(url) {
  let newurl = url.replace("/", "");
  return `<h1>This is ${newurl} page Thank you !!</h1>
  <script>  console.log("Im running ");
</script>`;
}
//Listen metod
// we attach alistner to taht port  to listen for teh requestes and for sendig at that port

server.listen(5000, () => {
  //lister funtion
  console.log("The server is runnin gon port 5000");
});

//res.writeHead() – This method is used to send the response headers to the client. The status code and headers like content-type can be set using this method.
// res.write() – This method is used to send the response body to the client.
// res.end() – This method is used to end the response process.

//Let us create 2nd server to use teh 3 methods
const fs = require("fs");
let body = fs.readFileSync("./index.html");
let style = fs.readFileSync("./style.css");
let server2 = Http.createServer((request, response) => {
  setTimeout(() => {
    if (request.url == "/" || request.url == "/index.html") {
      response.writeHead(201, {
        "content-type": "text/html",
      });

      //   //Here we tell teh browser to inetprate as html yes i and aslo we can use as json javascript/text and soon
      response.write(body);
    } else if (request.url == "/style.css") {
      response.writeHead(200, { "content-type": "text/css" });
      response.write(style);
    }
  }, 3000);
  console.log("HELELE");
});

server2.listen(5001, () => {
  console.log("The server is running 5001");
});
