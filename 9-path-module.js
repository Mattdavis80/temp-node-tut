//path module

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "text.txt"); // returns a normalized path
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
