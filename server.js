var express = require('express'),
app = express(),
port = process.env.PORT || 3000,
mongoose = require('mongoose'),
morgan = require('morgan'),
jwt = require('jsonwebtoken'),
multer = require('multer'),


bodyParser = require('body-parser');

//mongoose instance connection url connection
//mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://192.168.100.23/Purdue');
//mongoose.connect('mongodb://heroku_2ltn9472:j048m56fg083g3liqbvne6ur2o@ds155634.mlab.com:55634/heroku_2ltn9472');
//mongoose.connect('mongodb://heroku_0bpgvlgv:sup2e44f3dap42h17rp4kus7f@ds019033.mlab.com:19033/heroku_0bpgvlgv');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(cors());

app.use(function (req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); next();
});

// Set up a URL route
app.get("/", function (req, res) {
res.send("Heroku Demo!");
});


app.listen(port);

console.log('Purdue list RESTful API server started on: ' + port); //comment