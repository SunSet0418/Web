var express = require('express')
var mongoose = require('mongoose')
var bodyparser  = require('body-parser')
var app = express()

app.listen(3000, function(){
  console.log('Server Running at 3000 Port')
})

app.get('/', function (request, response, error) {
  response.send('test');
})

app.post('/login', function (req,res,err) {
  if(err){
    console.log(err);
  }
})
