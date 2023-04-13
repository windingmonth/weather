var express = require('express');
var Hefengclient = require('./Api/Hefengclient')


var app = express();
 
app.get('/', function (req, res) {
   res.send('Hello World');
})

app.get('/hefeng/getweather', async function(req, res){
    var hefengclient = new Hefengclient();
    let response = await hefengclient.getWeather();
    res.send(response);
} )

var server = app.listen(7001, function () {
 
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})