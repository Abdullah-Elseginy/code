// //diff between var let const
// //--------------
// //spread opreator ...arr

// var arr = ["a", "b", "c"];
// var arr2 = [...arr];
// console.log(...arr);
// console.log(arr2);
// // Destructing
// var arr = ["mo", "so", "2", 5];
// var [x, y, z] = arr;

// console.log(x);
// console.log(y);
// console.log(z);
// var x = 5;
// var y = 6;
// var [x, y] = [y, x]; //! Swap using destructing
// console.log(x);
// console.log(y);
// //hooks example by destructing
// function usestate(val) {
//   return [
//     val,
//     function (newVal) {
//       val = newVal;
//       return val;
//     },
//   ];
// }
// var [count, SetCount] = usestate(0);
// // setInterval(() => {
// //   SetCount(count++);
// //   console.log(count);
// // }, 1000);
// var [data, SetData] = usestate(["a", "b", "c"]);

// let newdata = [1, 2, 3];
// SetData(newdata);
// console.log(data);
// console.log(SetData());
// // IIFE Function "immediatly invoke function expression"
// (function () {
//   console.log("no");
// })();

// callBack Function
function mycallback(callBack) {
  console.log("hola", callBack());
}
mycallback(() => {
  return "welcomme from ITI";
});

//array methods
let arr = ["mo", "so", "lo"];
let output = arr.find((item, index) => {
  return item == "so"; // return item that match the condition
});
console.log(output);

let mapOutput = arr.map((item, index) => {
  return `${index} item ${item}`; // return array with same length of main array
});
console.log(mapOutput);
