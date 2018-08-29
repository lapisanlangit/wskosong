var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');

app.use(bodyParser.urlencoded({ extended: false} ))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.send('Welcome to Apikasi Kosong!')
  //console.log('Welcome to Apikasi Perjalanan Dinas!')
})


app.use(function logger(req,res,next){
  console.log('\x1b[33m%s\x1b[0m',"HTTP => "+new Date().toDateString()+" "+new Date().toLocaleTimeString(),req.method, req.url,req.body,req.query);
  next();
});

app.use(function(req, res, next) {
  //menghilangkan OPTION
  if (req.method === 'OPTIONS') {
      //console.log('!OPTIONS');
      var headers = {};
      // IE8 does not allow domains to be specified, just the *
      // headers["Access-Control-Allow-Origin"] = req.headers.origin;
      headers["Access-Control-Allow-Origin"] = "*";
      headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
      headers["Access-Control-Allow-Credentials"] = false;
      headers["Access-Control-Max-Age"] = '86400'; // 24 hours
      headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept,Authorization";
      res.writeHead(200, headers);
      res.end();
} else {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Access-Control-Allow-Headers, Accept, Authorization");
  next();
}
});

//middleware untuk cek token
// app.use(function(req, res, next) {
//   var auth = req.get("authorization");
//   if (auth) {
//     var arrAuth=auth.split(" ");
//     var token=arrAuth[1];
//     // console.log(token);
//     jwt.verify(token, 'rahasia', function(err, decoded) {
//       if (err) {
//           res.send(err);
//           console.log(err);
//           return;
//       } else {
//           // console.log(decoded);
//           req.decode=decoded;
//           req.iduser=decoded.iduser;
//           req.kdsatker=decoded.kdsatker;
//           //console.log(req.kdsatker);
//           next();
//       }
//     });

//   } else {
//     req.token=""
//     next();
//   }

// });

app.use('/rkppn',require('./resources/rkppn'));
app.use('/rsatker',require('./resources/rsatker'));
app.use('/ruser',require('./resources/ruser'));


app.listen(4000,function() {
    console.log('Jalan di Port :4000');
  });
