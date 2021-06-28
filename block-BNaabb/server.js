var http = require("http");
var server = http.createServer((req, res) => {
  var store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", (chunk) => {
    console.log(store);
  });
  res.write(store);
});
server.listen(3456, () => {
  console.log(`Lost in 4k...`);
});
