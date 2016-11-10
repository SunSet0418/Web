var express = require('express');
var app = express();
var mongoose = require('mongoose')
var bodyParser = require('body-parser')
var schema = mongoose.Schema;

app.use(bodyParser.urlencoded({
    extended: true
}));

app.listen(3000, function(){
  console.log("Server Running at 3000 Port")
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

app.post('/login', function(req, res){
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
          name: result.name
      })
    }
    else{
      res.json({
        success: false,
        message: "user not Founded"
      })
    }
  }
)
})

app.post('/register', function(req, res){
  var name  = req.param('name');
  var password = req.param('password')

  user = new User({
    name: req.param('name'),
    password: req.param('password')
  })

  user.save(function(err){
    if(err){
      console.log("User save error")
      throw err
    }
    else{
      console.log("user save success")
      res.json({
        success: true,
        message: "회원가입 성공"
      })
    }
  })
})

app.get('/list.html', function(req, res){
  res.redirect('index.html')
})

app.get('/', function(req, res){
  res.send("adsfa")
})
