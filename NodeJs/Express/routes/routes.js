//routes is funtion one  of teh exprss fatures that alows us to handle http requests relevanteley

const exprss = require("express");
let app = exprss();
//There Are 4 basic Http requests

/* 
app.get() – retrieves data

app.post() – creates new data

app.put() – updates existing data

app.delete() – deletes data
 */

app.get("/", (req, res) => {
  res.send("IM the Home page"); //Know mehtod that simple sends the text
});
app.post("/submit", (req, res) => {
  res.send("form submited");
});
app.put("/update", (req, res) => {
  res.send("Data Updated");
});
app.delete("/delete", (req, res) => {
  res.send("Items Deleted");
});
//?Handlers for teh reques defined withs (req,res)=>{ }
//then we send teh data using teh methods below
app.listen(4000, () => {
  console.log("server is runnig on port http://localhost:4000");
});

//?Methods that are used to Send Responses to the clinet requests
// simple .send() this method sends HTML JSON and any other binary datas

// ?.json()
// this method used for buildg apis sneds teh given datas automaticaly to teh JSON formay
app.get("/user", (req, res) => {
  res.json({ name: "Jhone Doe", age: 22 }); //Sended as JSON since we used json of that
});

//?.redirect()
// if we wanted to redirect the user to the new url we use .redirect()
app.get("/login", async (req, res) => {
  //
  await setTimeout(() => {
    res.redirect("/user"); //if aseked me her i wil send him to the user
  }, 3000);
});

//?.status() with other methods like send or any  other
// this method allows us to control teh status code of the http
app.get("/notfoud", (rq, res) => {
  res.status(404).send("NOT found");
});

////.render()
//used when we ar eworking with templates puh  handelbars i dont know them actualy
app.get("/profile", (req, res) => {
  res.render("profile", { username: "john_doe" });
});

//?routes
// routes ar the roything pas taht teh reues is sent to
app.get("/path", (req, res) => {
  res.send("Routehd to this Path ");
});

//?.sendFile()

//-Chainable Routhe creations
//W e ue app.route() to colecet the same routing path
//se te routes Example.js
