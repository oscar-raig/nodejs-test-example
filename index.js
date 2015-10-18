var myrequest = require("./myrequest.js");

console.log("Hello world");

myrequest.makeRequest(console.log, function (error, response) {
      console.log("Callback called");
    });
//
myrequest.sum(2,3);


