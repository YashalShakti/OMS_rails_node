$(document).ready(function(){
	var button_clicked=false;

	var customer_id=0;
	$("#sendbtn").click(function(){
	   
	   if(!button_clicked){
		    var ip_name = $('#name').val();
		    var ip_email = $('#email').val();
		   
		    var settings = {
		      "async": true,
		      "crossDomain": true,
		      "url": "http://localhost/customer/signup",
		      "method": "POST",
		      "headers": {
		        "content-type": "application/json",
		        "cache-control": "no-cache"
		      },
		      "processData": false,
		      "data": "{\"customer\":{\"customer_name\":\""+ip_name+"\",\"email\":\""+ip_email+"\"}}"
		    }

		    $.ajax(settings).done(function (response) {
		        $("#sendbtn").html('Share');
		        $("#coupon_code").html("Your coupon code is : HIAB"+response.id);
				customer_id=response.customer_id;
		        button_clicked=true;
		    });
		}
		else{
		     $("#coupon_code").html("Sharing your code");
		     $(location).attr('href','http://localhost:8000/buy/'+customer_id);
		//	window.location.replace("localhost:8000/buy");

		}

	});
});	