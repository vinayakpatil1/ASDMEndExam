var express = require('express');
var app = express();

var CustomerOrdersController=function(request, response){
 
  var orderDetails = [
    {orderId:1, customerName:"vinayak",amount:10, status:"process"},
    {orderId:2, customerName:"sagar",amount:10, status:"process"},
    {orderId:3, customerName:"Anand",amount:10, status:"process"}
  ];
  
  response.send(orderDetails);
};
 
app.get('/',CustomerOrdersController);

var server = app.listen(2000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("App is running on http://localhost:2000", host, port)
})