var express = require('express');
var app = express();

app.get('/hello.html', function(req, res){
	res.send("Hello World");
    });

app.listen(3000);
console.log('Listenling on port 3000!');
