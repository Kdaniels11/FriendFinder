var express = require('express');
var path = require('path');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(express.json());

require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);

app.listen(port, function() {
  console.log("App listening on PORT: " + port);
});