// writeCode

// 1. console.log(\_\_dirname);
// 2. console.log(\_\_filename);
// 3. use path module to join `__dirname` and `server.js`

var path = require("path");
var relative = "./server.js";
var absolutepath = __dirname;
let formpath = path.join(__dirname, "server.js");
console.log(absolutepath, formpath);
