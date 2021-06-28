const { clear } = require("console");
var path = require("path");
var relative = "./server.js";
var absolutepath = __dirname;
let formpath = path.join(__dirname, "server.js");
console.log(absolutepath, formpath);
