// modules =================================================
var express        = require('express');
var app            = express();
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var morgan = require('morgan');
var ejs = require('ejs');
var ejsMate = require('ejs-mate');

// configuration ===========================================

// config files
var db = require('./config/db');
mongoose.Promise = global.Promise;//suppress warning: "Mongoose: mpromise (mongoose's default promise library) is deprecated, plug in your own promise library instead"
//mongoose.connect('mongodb://localhost:27017/angularian', function(err){
mongoose.connect(db.url, function(err){
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to db!');
  }
});

var port = process.env.PORT || 8080; // set our port
// mongoose.connect(db.url); // connect to our mongoDB database (commented out after you enter in your own credentials)

// get all data/stuff of the body (POST) parameters
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/www')); // set the static files location /public/img will be /img for users
mainDir = __dirname;
app.use(morgan('dev'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');

// routes ==================================================

var routesTodo = require('./server/routes/todo-route');
var routesUser = require('./server/routes/user-route');
app.use(routesTodo);
app.use(routesUser);

require('./server/routes')(app); // pass our application into our routes

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port + '   - dir: ' + __dirname); 			// shoutout to the user
exports = module.exports = app; 						// expose app
