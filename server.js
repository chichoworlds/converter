var express = require('express');
var app = express();
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var port = 3000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static(__dirname + '/front'));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/front/index.html');
});

http.listen(port, function (err) {
	if (err) {
		console.log(err);
	}else{
		console.log('Server is running on port '+ port);
	}
});
