function Tickets(age) {
  if (!+age) {
    return;
  }
  if (age < 3) {
    console.log("free ticket");
  } else {
    let Day = "Tuesday"; //rad
    if (Day === "Tuesday") {
      return "it is tuesday so you get 5$";
    } else {
      if (age >= 3 && age <= 12) {
        return "Price is 5$";
      } else if (age <= 17) {
        console.log("your price is 7$");
      } else if (age <= 64) {
        console.log("price is 10$");
      } else {
        console.log("price is 6$");
      }
    }
  }
}
module.exports = Tickets;
