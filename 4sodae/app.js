var express = require('express');
var mongoose = require('mongoose')
var bodyparser = require('body-parser')
var schema = mongoose.Schema;

app.use(bodyParser.urlencoded({
  extended: true
}))

app.listen(80, function(){
  console.log("Server Running at 80 Port")
})

mongoose.connect("mongodb://localhost/4sodae", function(err){
  if(err){
    console.log(err)
    throw err
  }
})

var UserSchema = new schema({
  name: {
    type: String
  },
  password: {
    type: String
  }
})

var User = mongoose.model('user', UserSchema);

app.get('/', function(req, res){
  User.findOne({
    password: req.param('password')
  }, function(err, result){
    if(err){
      console.log("find error : "+err)
      throw err
    }
    if(result){
      console.log(result.name+" Login")
      res.json({
        success: true,
        message: "Login success"
      })
      res.redirect('/list.html')
    }
    else{
      res.json({
        success: false,
        message: "user not Founded"
      })
      res.redirect('/')
    }
  }
)
})
