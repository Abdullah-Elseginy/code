//?truthy and falsy values
// var x = ""; // falsey value
// var c = undefined; // falsey value
// var v = null; // falsey value
// var naan = NaN; // falsey value
// var zer = 0; // falsey value
// var f = "  "; // trusy value
// var ar = []; // trusy value
// var ob = {}; // trusy value
// if (x || 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//?default value
// function sum(x = "hola", z) {
//   x = x || "not sent-x ";
//   z = z || "not sent-z";
//   console.log(x + z);
// }
// sum();
// //?hoisting
// v = 5;
// console.log("hosted " + v);
// var v;

// var s = 7;
// //?strin methods
// var myStr = "Let's see what happens!";
// console.log(myStr.charAt(1));
// console.log(myStr.charCodeAt(1));
// console.log(myStr.indexOf("e"));
// console.log(myStr.substring(0, 7));
// console.log(myStr.replace(/e/g, "W"));
// var reg = /j.*t/.test("JAHHHHHT");
// console.log(reg);
// console.log(Math.round(0.5));
// var l = 1;
// function so(y) {
//   l = 5;
//   return l + y;
// }
// console.log(so(1));
// document.write(myStr.big().big().bold().fontsize(50).fontcolor("red"));

// var arr1 = ["a", "b"];
// var arr2 = [1, 2];
// console.log(arr1.concat(arr2));
// console.log(arr1.join("").split(","));
// var ss = "m,n,k,jh,";
// console.log(ss.split(","));
//?shawing
// var x = 5;
// function shawing() {
//   var x = 10;
//   return x;
// }
// console.log(shawing());
// console.log(x);

//? for in && for each

// var arr = ["a", "b", "c"];
// for (i in arr) {
//   //! i represent the index of the array
//   console.log(arr[i]);
// }
// console.log("_______________________________________________________");

// arr.forEach((element, index) => {
//   console.log(element, index);
// });
// console.log("_______________________________________________________");
//! map
// arr.map((element, index) => {
//   console.log(element, index);
// });
// console.log("_______________________________________________________");
// var obj = {
//   name: "abdullah",
//   age: "30",
//   location: "Tanta",
// };

// for (i in obj) {
//   //! i represent key of the object
//   console.log(i);
// }
//? Associative Array
// var arr = [1, 2];
// arr["name"] = "abdullah";
// console.log(arr);
// for (i in arr) {
//   console.log(arr[i]);
// }

// console.log(arr.length);
// var date = new Date();
// console.log(date);

// date.setHours(14);
// console.log(date);
// date.setFullYear(2020);
// console.log(date);

//?hoisting
// console.log(sing());
// console.log(sing2());

// !function expression
// var sing2 = function () {
//   console.log("uhhh la la");
// };

// !function declaration
// function sing() {
//   console.log("ohhh la la");
// }
// sing2();
// console.log(sing2);
