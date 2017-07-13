
var express = require("express");
var app = express();
app.use(express.static("./public"));


var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


var mongoose = require('mongoose');

var Promise = require("bluebird");
mongoose.Promise = Promise;
var Article = require("./models/Article.js");

mongoose.connect("mongodb://heroku_g5286zlf:96qohdc0b9nurh2kktksepvh2@ds119210.mlab.com:19210/heroku_g5286zlf");
var db = mongoose.connection;
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});
db.once("open", function() {
    console.log("Mongoose connection successful.");
});


app.set('port', (process.env.PORT || 3000));


var router = require('./router');
router(app, db, __dirname);


app.listen(app.get('port'), function() {
    console.log("App running on port 3000!");
});
