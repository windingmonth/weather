var express = require('express');
var util = require('util');
const { stringify } = require('querystring');
var app = express();
 
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.send(JSON.stringify(util.inspect(req)));
    res.send('Hello World');
   
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})