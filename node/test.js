var request = require('request');

var myJSONObject = { "name":"anon","email":"anon@mail.com"};
var serv = "http://localhost:3000/customers"

request({
    url: serv,
    method: "POST",
    json: true,   // <--Very important!!!
    body: myJSONObject
}, function (error, response, body){
    console.log(response);
});





