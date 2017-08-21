
// Express
var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

var db = require('./models');

app.use(express.static('./public'));

// Body Parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: 'application/vnd.api+json'}))

// Method Override
var methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Express Handlebars
var expHbars = require('express-handlebars');
app.engine('handlebars', expHbars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require('./controllers/burgers_controller.js')(app);

db.sequelize.sync({}).then(function(){

  app.listen(PORT, function() {
    console.log('Connection Successful');
  });
});

/*"production": {
    "username": "vv4n0jd1ciadbyzi",
    "password": "oz0jb4jbmw28o6il",
    "database": "rx1h33ww1qgodymx",
    "host": "http://t89yihg12rw77y6f.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    "dialect": "mysql"
  }*/
