$(document).ready(function(){
	var button_clicked=false;
	var amount=0,order_id=0,coupon_status=1;
	amount = Math.floor((Math.random() * 1000) + 1);
	order_id = Math.floor((Math.random() * 1000) + 1);

	var href = document.location.href;
	var customer_id = href.substr(href.lastIndexOf('/') + 1);
	$("#product_price").html("Rs: "+amount);

	$("#buybtn").click(function(){

			 alert("{\"order\":{\"customer_id\":\""+customer_id+"\",\"amount\":\""+amount+"\",\"order_id\":\""+order_id+"\"},\"coupon\":{\"coupon_status\":\""+coupon_status+"\"}}");
		    var settings = {
		      "async": true,
		      "crossDomain": true,
		      "url": "http://localhost/order/new",
		      "method": "POST",
		      "headers": {
		        "content-type": "application/json",
		        "cache-control": "no-cache"
		      },
		      "processData": false,
		      "data": "{\"order\":{\"customer_id\":\""+customer_id+"\",\"amount\":\""+amount+"\",\"order_id\":\""+order_id+"\"},\"coupon\":{\"coupon_status\":\""+coupon_status+"\"}}"
		    }
		   
		    $.ajax(settings).done(function (response) {
		        alert("Successfully ordered with order_id : "+order_id);
		    });
	});
});	