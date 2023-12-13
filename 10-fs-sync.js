//fs = system , asyncrous and syncrsous methods of file system
const { readFileSync, writeFileSync } = require('fs');
console.log("start");
const first = readFileSync("./content/first.txt", "utf8")
const second = readFileSync("./content/second.txt", "utf8")
//console.log(first, second);
writeFileSync("./content/result-syn.txt", `Here is the result: ${first}, ${second}`, {flag: "a"})//this is used to create a new text file inserting the text of the first two files
console.log("done with task");
console.log("starting the next one");

