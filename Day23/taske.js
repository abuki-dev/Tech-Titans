let MyaDat = new Date(2012, 0, 7, 3, 12);
console.log(MyaDat.getDay());

function getlocalDay(D) {
  let Week = [
    "Sunday",
    "monday",
    "Tuseday",
    "wednsday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return Week[D.getUTCDay()];
}
console.log(getlocalDay(MyaDat));

//I asked about returning the date ago

//firs crete date
//the acept the date and the day to substract
//the convert the date to ms using gettime() and teh other convert to ms using maths
//the generat eanoter funstion to suntract both and return

function getDayAgo(date, day) {
  let to_ms = date.getTime();
  let dat_toms = day * 24 * 60 * 60 * 1000;
  return new Date(to_ms - dat_toms);
}
console.log(getDayAgo(MyaDat, 365));
console.log(MyaDat);

//getign how many seconds have passed to day
function gtsecondsToday() {
  let A = new Date();
  return A.getHours() * 3600 + A.getMinutes() * 60 + A.getSeconds();
}
console.log(gtsecondsToday());
