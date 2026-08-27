//Global Variables are variables that can be accessed  everywhere even if nested inside code
//Common Vars __dirname and __filename

// __dirname Global Variable
console.log(__dirname); //the directory name \Intro

// __filename Global Variable
console.log(__filename); //the file name Intro\globalvar.js

//ley is create custom global variable using global keyword
global.customVar = "This created by user ";
console.log("customVar => ", customVar);
console.log(typeof customVar);
//To run this code bash node globalvar.js

//Summary
//global
