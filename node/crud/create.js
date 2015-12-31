var request = require('request');


exports.coupon = function (api_response,status,customer_id){
		var json = { "status":status , "customer_id":customer_id};
		var serv = "http://localhost:3000/coupons"
		request({
		    url: serv,
		    method: "POST",
		    json: true,   
		    body: json
		}, function (error, response, body){
		    console.log("Created coupon :"+response.body.id);
		    api_response.send(response.body);
		});
};


exports.customer = function (api_response,name,email){
		var json = { "name":name , "email":email};
		var serv = "http://localhost:3000/customers"
		request({
		    url: serv,
		    method: "POST",
		    json: true,   // <--Very important!!!
		    body: json
		}, function (error, response, body){
			console.log("Created customer : "+ response.body.id);
		     exports.coupon(api_response,'0',response.body.id);
		});
};

exports.order = function (api_response,amount,customer_id){
		var json = { "amount":amount , "customer_id":customer_id};
		var serv = "http://localhost:3000/orders"
		request({
		    url: serv,
		    method: "POST",
		    json: true,   // <--Very important!!!
		    body: json
		}, function (error, response, body){
		     console.log("Created Buy record #"+response.body.id);
	  	     api_response.send("Created Buy record #"+response.body.id);
		});
};





