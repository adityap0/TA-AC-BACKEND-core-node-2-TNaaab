let http = require("http");
let url = require("url");
let fs = require("fs");
let qs = require("querystring");
let server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url);
  let pathName = parsedUrl.pathname;
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    if (req.method === "GET" && pathName === "/form") {
      res.setHeader("Content-Type", "text/html");
      fs.createReadStream("./form.html").pipe(res);
    }
    if (req.method === "POST" && pathName === "/form") {
      let parsedData = qs.parse(store);
      res.setHeader("Content-Type", "text/html");
      res.write(`<h2>${parsedData.name}</h2>`);
      res.write(`<h2>${parsedData.email}</h2>`);
      res.write(`<h2>${parsedData.age}</h2>`);
      res.end();
    }
  });
});
server.listen(5678, () => {
  console.log(`@ server 5678..`);
});
