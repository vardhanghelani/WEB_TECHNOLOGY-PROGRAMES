// const path = require("path");
// const normalize_path = path.normalize("file:///C:/Users/student/Downloads/../11062024101324AM%20(2).pdf");
// console.log(normalize_path);
// const   extName = path.extname("file:///C:/Users/student/Downloads/../11062024101324AM%20(2).pdf");
// console.log("Exact name :",extName);
// const baseNmae= path.basename("file:///C:/Users/student/Downloads/../11062024101324AM%20(2).pdf");
// console.log("baseName :",baseNmae);
// const dirNmae= path.dirname("file:/student//C:/Users//Downloads/../11062024101324AM%20(2).pdf");
// console.log("dirName :",dirNmae);
// const Join= path.join("file:///C:/Users/student/Downloads","/../11062024101324AM%20(2).pdf");
// console.log("after :",Join);
// const absolute = path.isAbsolute("D:\\Yash-1:");
// console.log("absolute :",absolute);
const fs = require("fs");
let write = fs.writeFileSync("demo.txt","this is node js")
let append =fs.append
let read = fs.readFileSync("demo.txt","utf-8");
console.log(read);
