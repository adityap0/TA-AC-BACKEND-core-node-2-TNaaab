var { EventEmitter } = require("events");
var myEmitter = new EventEmitter();
myEmitter.on("notice", () => {
  console.log("Event emitted");
});
myEmitter.on("notice", () => {
  console.log("Event emitted 2");
});
myEmitter.emit("notice");
