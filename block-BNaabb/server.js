var http = require("http");
var qs = require("querystring");

var server = http.createServer((req, res) => {
  var dataFormat = req.headers["content-type"];
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", (chunk) => {
    if (dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      console.log(store, parsedData);
      res.end(store);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = qs.parse(store);
      res.end(JSON.stringify(parsedData));
    }
  });
});
server.listen(3456, () => {
  console.log(`Lost in 4k...`);
});
