var express = require('express');
var app = express();
var request = require('request');
var moment = require('moment');
 

function apiRequest() {

	var options = {
		url: "https://itunes.apple.com/search?term=Have%20You%20In%20My%20Wilderness&country=us&media=music&entity=album"
	};
	function callback(error, response, body) {
			if (!error && response.statusCode == 200) {
			
				var info = JSON.parse(body);
				console.log(info);
				// console.log(info.recenttracks.track);
				// var x = new Date(info['recenttracks']['track'][0]['date']['#text']);
				// var y = moment(new Date(info['recenttracks']['track'][0]['date']['#text']));
				// var a = new Date();
				// var z = moment(info['recenttracks']['track'][0]['date']['#text']);
				// console.log(info['recenttracks']['track'][0]['date']['#text']);
				// console.log(a.toISOString());
				// console.log(x);
				// console.log(y);
				// console.log(z);
				// var xx = new Date();
				// console.log(ISODate(xx));

				
			} else {
				console.log(error);
				console.log(response);
			}
	}

	request(options, callback);
};

apiRequest();


app.listen(8081);
console.log('server listening on port 8081');