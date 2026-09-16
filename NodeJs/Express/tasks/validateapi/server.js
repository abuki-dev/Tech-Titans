//This server middleware  chkes if teh request is came from ourownPrivate Key

// creat eaxpres app caled validatekey
// after taht chae teh request have the headrs key oatches our key
// if its our key he can go t the next
// other wise throm invalidApi request

const express = require("express");
const validateApi = express();
validateApi.use(express.urlencoded({ extended: true }));
const PORT = 5000;
class ApiError extends Error {}
validateApi.use(express.static(__dirname)); // befor all make the directory index file static
// let us chek the reuest
validateApi.use((req, res, next) => {
  console.log(`${req.method} request To ${req.url}`);
  if (req.url === "/") return next(); //The index file

  let key = req.headers["x-token"];
  //the Actual Logic
  if (!key || key !== "Mysiganture") {
    return next(new ApiError("Error Bad request"));
  }
  next();
});

//Now the above cheks what we nedded now let us move to teh request handeler route
validateApi.post("/home", (req, res) => {
  res.json({ message: "Hellow This is home page" });
});

//The Error  catcher middleware
validateApi.use((err, req, res, next) => {
  if (err instanceof ApiError) {
    console.log("invalid Reeques  Error ", err.message);
    return res.status(403).send("Response Forbidden");
  }
  console.log("Runtime Error ", err.message);
});
// Listenr the port
validateApi.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
