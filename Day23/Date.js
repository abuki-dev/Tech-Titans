let sureya = new Date();
//console.log(sureya);
//new Date(year, month, date, hours, minutes, seconds, ms)
let x = new Date(2018, 10, 30, 9, 35, 0, 0);
//console.log(x);
//console.log(x.getDay());

//seting cutum date time
sureya.setTime(15000);
//console.log(sureya);
sureya.setMinutes(47);
//console.log(sureya.getTime());
let now = Date.now();
//sureya.setTime(now);
console.log(new Date(Date.parse("2009-7-15")));
x.setDate(27);
x.setMonth(11);
x.setHours(12, 12, 12);

console.log(x);
console.log(x.getFullYear());
