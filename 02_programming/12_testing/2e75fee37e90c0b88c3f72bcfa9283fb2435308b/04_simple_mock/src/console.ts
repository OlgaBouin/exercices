// console.log("Hi");
// // const log = console.log();
// // conso le = () => {}
// console.log = function () {};

// console.log("Hi");

import * as fs from "fs";
const output = fs.createWriteStream("./outputHello.txt");
output.write("test");
output.end();
