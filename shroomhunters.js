//Website's entry point

//in terminal invoke node fileName.js

var express = require('express');

var app = express();

/* set up handlebars view engine
creates a view engine and configures Express to use it by default
*/

var handlebars = require('express3-handlebars')
	.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);



//adding routes to home page and the about page without which Express server will throw 404 exception

//app.get is the method to add routes
//takes two parameters: a path and a function
app.get('/', function(req, res){
	//res.type('text/plain');
	res.render('home');
	//res.send('Shroom Hunters');
});

app.get('/about', function(req, res){
	res.render('about');
	/*res.type('text/plain');
	res.send('About Shroom Hunters');*/
});

// 404 page - catch all handler (middleware)
app.use(function(req, res, next){
	res.status(404);
	res.render('404');
	/*res.type('text/plain');
	res.send('404 - Not Found');*/
});


// 500 page -error handler (middleware)
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
	/*res.type('text/plain');
	res.send('500 - Server Error');*/
});


app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost:' +
		app.get('port') + '; press Ctrl-C to terminate.' );
});