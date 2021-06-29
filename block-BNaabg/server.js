const { fstat } = require("fs");
var http = require("http");
var url = require("url");
var fs = require("fs");
var usersPath = __dirname + "/users/";
var server = http.createServer((req, res) => {
  let store = "";
  req.on("data", (chunk) => {
    store += chunk;
  });
  req.on("end", () => {
    let parsedUrl = url.parse(req.url, true);
    let pathname = parsedUrl.pathname;
    if (req.method === "POST" && pathname === "/users") {
      let username = JSON.parse(store).username;
      fs.open(usersPath + username + ".json", "wx", (error, fd) => {
        if (error) {
          return console.log(error);
        } else {
          fs.writeFile(fd, store, (error) => {
            if (error) {
              return console.error(error);
            }
            fs.close(fd, () => {
              return res.end(`${username} created successfully!!`);
            });
          });
        }
      });
    }
    if (pathname === "/users" && req.method === "GET") {
      var username = parsedUrl.query.username;
      fs.readFile(usersPath + username + ".json", (error, content) => {
        if (error) {
          return console.log(error);
        }
        res.setHeader("Content-Type", "application/json");
        return res.end(content);
      });
    }
    if (pathname === "/users" && req.method === "PUT") {
      var username = parsedUrl.query.username;
      fs.open(usersPath + username + ".json", "r+", (error, fd) => {
        console.log(fd);
        if (error) {
          return console.log(error);
        }
        fs.ftruncate(fd, (error) => {
          if (error) {
            return console.log(error);
          }
          fs.writeFile(fd, store, (error) => {
            if (error) {
              return console.log(error);
            }
            fs.close(fd, () => {
              return res.end(`${username} was successfully updated!!`);
            });
          });
        });
      });
    }
    if (pathname === "/users" && req.method === "DELETE") {
      var username = parsedUrl.query.username;
      fs.unlink(usersPath + username + ".json", (error) => {
        if (error) {
          return console.log(error);
        }
        return res.end(`${username} is deleted`);
      });
    }
    res.statusCode = 404;
    res.end(`Page Not found...`);
  });
});
server.listen(3000, () => {
  console.log(`Server on 3000...`);
});
