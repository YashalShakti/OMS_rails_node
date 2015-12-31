var request = require('request');

exports.coupon = function(_id,status){
		var json={};
		if(status)
			json = { "status":status , "customer_id":_id};
		else
			json = { "id":_id};
		console.log("Updating status to"+status+"for customer_id "+_id);
		console.log(json);
		var serv = "http://localhost:3000/coupons"
		request({
		    url: serv,
		    method: "PUT",
		    json: true,   // <--Very important!!!
		    body: json
		}, function (error, response, body){
			console.log("Updated coupon for customer_id #"+_id);
		});
};


