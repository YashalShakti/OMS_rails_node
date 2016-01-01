var express = require('express'),cors = require('cors');
var app = express();
var customer = require('./routes/customer');
var order = require('./routes/order');

app.use(cors());
//Use static files
app.use('/static',express.static('/public'));
app.use('/customer', customer);
app.use('/order', order);

app.route('/')
	.get(function(req,res){
		res.send('OMS GET');
	})
	.post(function(req,res){
		res.send('OMS PUT');
	});

var port = process.env.PORT || 80;
var server = app.listen(port);

app.use(function(req,res){
	res.status(404).send('Ooops! Thats a 404');
});