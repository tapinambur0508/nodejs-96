// Callback
// const fs = require("node:fs");

// console.log("Start");

// fs.readFile("read.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     throw err;
//   }

//   console.log(data);
// });

// console.log("End");

// Promises
const fs = require("node:fs/promises");

console.log("Start");

// fs.readFile("read.txt", { encoding: "utf-8" })
//   .then((data) => console.log(data))
//   .catch((err) => {
//     throw err;
//   });

const p1 = fs.readFile("read.txt", { encoding: "utf-8" });
const p2 = fs.readFile("read.txt", { encoding: "utf-8" });
const p3 = fs.readFile("read.txt", { encoding: "utf-8" });

Promise.all([p1, p2, p3])
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    throw err;
  });

console.log("End");
