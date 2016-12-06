var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static("."));
app.get('/', function(req, res){
    res.sendfile('./index.html');
});app.listen(5000, function(){
  console.log("listening on 5000");
});