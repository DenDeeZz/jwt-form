const express = require('express');
const jwt = require('json-web-token');
const app = express();
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});

app.listen(3000, () => {
  console.log('Server started on 3000');
});

var secret = 'rzfsbphJ';
var tmp = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiQWRtaW4iLCJwYXNzd29yZCI6IjEyMzQ1In0.ROIG7kunxBjMAIFbeUVqJ1lBrBOENxD6powfWoBCBbw';

  app.use(express.static('public'));
  app.post('/auth', parser, (req, res) => {

      var payload = {
        name: req.body.username,
        password: req.body.password
      }

      jwt.encode(secret, payload, (err, token) => {
        if(err) {
          res.sendStatus(403);
        }
        else {
          if(token == tmp) {
            res.send(token);
          }
          else {
            res.send('Wrong password or login');
          }
        }

      })


  })
