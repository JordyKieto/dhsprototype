var express = require("express");
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var routes = require("./routes");

var app = express();
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text({type: 'json'}));
app.use(bodyParser.json());
app.use(express.static('../client'));

app.use("/", routes);

mongoose.connection.on('connected', function (err) {
    console.log("Mongo connect success on... "+ mongoose.connection.name)
   });
mongoose.connect('mongodb://localhost').then(() =>{
    app.server = app.listen(port, function(){
    console.log('DHS Prototype on '+ app.server.address().port)
    });
});

module.exports = {
    app: app,
};