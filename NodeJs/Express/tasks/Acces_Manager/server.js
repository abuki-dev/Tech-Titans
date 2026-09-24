// the goal is to send the resposnse to the broser based on the sender tier
// function that chekes the tier for the reqiest headers ["x-tier"]
// generate a funtion that sends arequest usin the option and the clicked buttons tier
//1 che if the user have x-tier at the hearder go else send him error accsing the page
//2 if exist doublechek the request bodys userTier
//3 if tier and X-tier are the same Provide himw the page else Anautorized Access Error

//improt expres and get ammiddle ware for the requesting broser

const Express = require("express");
const path = require("path");
const morgan = require("morgan");
const e = require("express");
const PORT = 4000;
const app = Express();
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = this.constructor.name;
  }
}
class UnAutorized extends CustomError {}
class MissingSubscriptionError extends CustomError {}

// morgan module allowes as to save logging infos of the request
app.use(morgan("tiny"));
//let us make the app use parsing the form sumtions
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json()); // from the ftching

//Now let us serve the Public Folder
app.use(Express.static(path.join(__dirname, "Public")));

// now let us recive The requet form the Broser
// let us use Middleware For everyrequest Sending the request console
app.use((req, res, next) => {
  //now let us chhek the Given rquest and teh urls  if both
  if (req.method !== "POST" || !req.body) {
    console.log("im runnin inside");
    return next();
  }
  //if we have request Body let  us chek the given values
  const { requestTier } = req.body;
  const { usertier } = req.headers;

  console.log("request tier " + requestTier, "userTier " + usertier);
  if (!usertier) {
    return next(
      new MissingSubscriptionError("Pleas subscribe at least The bronze Tier"),
    );
  }
  if (requestTier !== usertier) {
    // if the requested tier and the currunt tier are not incomapatble return unautorized request
    return next(new UnAutorized("Your Tier Is not conpatable For This Page"));
  }
  next(); // now the tier are the same
});

app.post("/requestTier", (req, res) => {
  res.json({
    message: `Hello user, welcome to the ${req.body.requestTier} page`,
  });
});

app.use((err, req, res, next) => {
  if (err instanceof UnAutorized || err instanceof MissingSubscriptionError) {
    return res.status(401).json({
      [err.name]: err.message,
    });
  }

  res.status(500).json({ error: err.message + " Internal Server Error" });
});

app.listen(PORT, () => {
  console.log(`The server is running on port http://localhost:${PORT}`);
});
