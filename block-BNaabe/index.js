// ## BLOCK-writeCode

// #### Path
// Q. Suppose we have 3 files inside a directory on desktop
// The structure is
//   - node(folder)
//     - app.js
//     - server.js
//     - index.html
// You are currently inside server.js

// Write code to
// - capture absolute path of `server.js`(itself)
const path = require("path");
const serverPath = path.join(__dirname, "server.js");
// - get absolute path of `app.js`
const appPath = path.join(__dirname, "app.js");
// - get realtive path of `index.html`
let realtiveIndexpath = "./index.html";
// - get absolute path of `index.html` using `path module`
const indexPath = path.join(__dirname, "index.js");
// 2
let http = require("http");
let server = http.createServer((req, res) => {
  let dataFormat = req.headers["content-type"];
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      res.statusCode = 201;
      res.end(store);
    }
  });
});
server.listen(4000, () => {
  console.log(`Server 4000 activated...`);
});

//3
let qs = require("querystring");
let server2 = http.createServer((req, res) => {
  let dataFormat = req.headers["content-type"];
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      res.statusCode = 201;
      res.end(store);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = qs.parse(store);
      console.log(parsedData.captain);
      res.end(JSON.stringify(parsedData.captain));
    }
  });
});
server2.listen(4001, () => {
  console.log(`Server 4001 activated...`);
});

//4
let server3 = http.createServer((req, res) => {
  let dataFormat = req.headers["content-type"];
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      res.end(store);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
});
server3.listen(9000, () => {
  console.log(`Server 9000 activated...`);
});

//5
let server4 = http.createServer((req, res) => {
  let dataFormat = req.headers["content-type"];
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      console.log(parsedData);
      res.end(`<h1>${parsedData.name}</h1><h2>${parsedData.email}</h2>`);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
});
server4.listen(9001, () => {
  console.log(`Server 9001 activated...`);
});

//6
let server5 = http.createServer((req, res) => {
  let dataFormat = req.headers["content-type"];
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      console.log(parsedData);
      res.end(`<h1>${parsedData.name}</h1><h2>${parsedData.email}</h2>`);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = qs.parse(store);
      console.log(parsedData);
      res.end(`<h2>${JSON.stringify(parsedData.email)}</h2>`);
    }
  });
});
server5.listen(8002, () => {
  console.log(`Server 8002 activated...`);
});
