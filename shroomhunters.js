//Website's entry point

//in terminal invoke node fileName.js

var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);


//adding routes to home page and the about page without which Express server will throw 404 exception

//app.get is the method to add routes
app.get('/', function(req, res){
	res.type('text/plain');
	res.send('Shroom Hunters');
});

app.get('/about', function(req, res){
	res.type('text/plain');
	res.send('About Shroom Hunters');
});

// custom 404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});


// custom 500 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('500 - Server Error');
});


app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.' );
});