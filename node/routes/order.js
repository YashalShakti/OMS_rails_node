var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var update = require('../crud/update');
var create = require('../crud/create');

router.use(bodyParser.json());

/* GET buy listing. */
router.get('/new', function(req, res, next) {
	res.send('Buying new product');
});

router.post('/new', function(req,res,next){
  	if (!req.body) return res.sendStatus(400);
	create.order(res,req.body.order.amount,req.body.order.customer_id,req.body.order.order_id);
    update.coupon(req.body.order.customer_id,req.body.coupon.coupon_status);
});

module.exports = router;
