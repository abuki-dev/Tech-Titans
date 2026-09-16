//fiat task is to comut every request came for the client then attach it to the visist number then log it
const express = require("express");
const app = express();
const PORT = 8000;

let requestCount = 0;
// Erery time ereques come in the middeleware incremented that

app.use((req, res, next) => {
  console.log(`${req.method} request To ${req.url}`);

  let start = Date.now();

  res.on("finish", () => {
    //registering The event to calculate evryting when fifnisedthe response every time
    let finisiedTime = Date.now() - start;
    console.log("the Request takes ", finisiedTime, " ms To finish");
  });

  requestCount++;
  req.visitNumber = requestCount;
  console.log("Hellow User your Requests Are now ", requestCount);
  next();
});

app.get("/", (req, res) => {
  setTimeout(() => {
    // We added the timeout to se teh measurin gtime clearely
    res.json({ message: "Your detailes", visitCount: requestCount });
  }, 3000);
});

app.use((err, req, res, next) => {
  console.log(err.message);
  res.status(404).send("Error the oage is not found");
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
