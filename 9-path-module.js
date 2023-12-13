const path = require("path")
console.log(path.sep);//path seperator like / or \ depending on your os

const filePath = path.join("./content", "subfolder", "test.txt");
console.log(filePath);
const baseName = path.basename(filePath);//only shows base of the file test.txt
console.log(baseName);
const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt');//gives full path of our file
console.log(absolute);