//.the goal is to send books data to teh server usin gthe html regues when the browser asks for the books
//Requirements
//Port 4000
//get bokks return Json the arrray of th books
// any other rought leed to 404
//

//Solution
// firs we need abutton to send the request for the server with tthe method at the html so need to red html
//server cheks the method the writhe the json of arrays
// the display that at the consol by sayin all books are

const fs = require("fs/promises");
const http = require("http");
const BOOKS = [
  { id: 2, name: "lanborghini" },
  { id: 1, name: "BUggati" },
];
//Firt let us generate fintion that reads the html the send to the server
async function readHtml(url) {
  try {
    return await fs.readFile(url, "utf-8");
  } catch (error) {
    console.log("Error while generating Html file");
    console.log(error.message);
    return -1;
  }
}
const server = http.createServer(async (req, res) => {
  let { url, method } = req;
  //Let us send the html to the browser
  if (url === "/") {
    let data = await readHtml("./Index.html");
    data === -1
      ? sendResponse(500, "text/plain", "Server Error", res)
      : sendResponse(200, "text/html", data, res);
  } else if (url === "/getData" && method == "GET") {
    sendResponse(201, "application/json", JSON.stringify(BOOKS), res);
  } else if (url === "/addnewBook" && method == "POST") {
    let data = "";
    req.on("data", (chunks) => {
      data += chunks;
    });
    req.on("end", async () => {
      try {
        let newbook = JSON.parse(data);
        newbook.id = 3;
        BOOKS.push(newbook);
        sendResponse(
          201,
          "application/json",
          JSON.stringify({
            message: "New book aded sucussucfully",
            book: newbook,
          }),
          res,
        );
      } catch (error) {
        sendResponse(400, "text/plain", "Error", res);
      }
    });
  } else return sendResponse(404, "text/plain", "404 page not found", res);
});
function sendResponse(code, type, data, response) {
  response.writeHead(code, { "content-type": `${type}` });
  response.write(data);
  response.end();
}
server.listen(4000, () => {
  console.log("the server is runnig port 4000");
});


//Tomorows tastk implementig delete method using displayer for the bok with corosponding remove button
// that removes the book from the server array 
