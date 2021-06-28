var http = require("http");
var qs = require("querystring");
var server = http.createServer((req, res) => {
  var dataFormat = req.headers["content-type"];
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  console.log(typeof store);
  req.on("end", (chunk) => {
    if (dataFormat === "application/json") {
      var parsedData = JSON.parse(store);
      res.end(store);
    }
    if (dataFormat === "application/x-www-form-urlencoded") {
      var parsedData = qs.parse(store);
      console.log(parsedData);
      res.end(JSON.stringify(parsedData));
    }
  });
});
server.listen(7000, () => {
  console.log(`Lost in 7000`);
});
