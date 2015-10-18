
var request = require("request");	
module.exports = {

	makeRequest:function(logger, callback) {
	    	request('http://www.google.com', function (error, xhr, response) { 
	      	logger('request made')
	      	callback(error, response)
    	})
	},
	sum: function (a,b) {
		console.log("Summ called");
	}
};	