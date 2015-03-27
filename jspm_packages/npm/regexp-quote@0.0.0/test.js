/* */ 
RegExp.quote = require("./regexp-quote");
var foo = "-\\^$*+?.()|[]{}";
console.assert((foo + foo).replace(new RegExp("(" + RegExp.quote(foo) + "){2}"), "ok") === "ok");
console.log("OK.");
