// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/*", function (request, response) {
  let receivedParamater = request.params[0];
  let dateObject = new Date(isNaN(receivedParamater) ? receivedParamater : new Date(parseInt(receivedParamater)));
  
  if (dateObject.getTime() > 0) {
    response.send({
      unix: dateObject.getTime(),
      natural: dateObject.toDateString()
    });
  } else {
    response.send({
      unix: null,
      natural: null
    });
  }
  
  response.send(request.params[0]);
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
