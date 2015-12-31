var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var create = require('../crud/create');

router.use(bodyParser.json());

/* GET buy listing. */
router.get('/signup', function(req, res, next) {
	res.send('Sign up here');
});

router.get('/update', function(req, res, next) {
	res.send('Update  coupon');
});

router.post('/signup', function(req,res,next){
  	if (!req.body) return res.sendStatus(400);
	create.customer(res,req.body.customer.customer_name,req.body.customer.email);
});

router.post('/update', function(req,res,next){
	if (!req.body) return res.sendStatus(400);
	create.coupon(res,req.body.coupon.coupon_status,req.body.coupon.customer_id);
});

module.exports = router;
