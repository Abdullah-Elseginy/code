// Call apply bind

// var admin = {
//   fname: "mohamed",
//   lname: "khaled",

//   getfullname(a, b) {
//     return `${this.fname} ${this.lname} = ${a + b}`;
//   },
// };
// let moderator = {
//   fname: "sameh",
//   lname: "boy",
// };
// console.log(moderator);
// console.log(admin.getfullname.call(moderator)); //call getfullname function
// console.log(admin.getfullname.apply(moderator, [1, 6])); // call function getfullname and can put array of arguments
// console.log(admin.getfullname.bind(moderator)); //return copy of function getfullname()
// let fn = admin.getfullname.bind(moderator);
// console.log(fn(5, 6));
// console.log(admin);
// console.log(moderator);
