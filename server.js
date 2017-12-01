var express = require('express'),
app = express(),
port = process.env.port || 3000,
mongoose = require('mongoose'),
cors = require('cors'),
morgan = require('morgan'),
jwt = require('jsonwebtoken'),
multer = require('multer'),
//config = require('./config'),

User = require('./api/models/userModel'),
Owner = require('./api/models/ownerModel'),
Building = require('./api/models/buildingModel'),
Tenant = require('./api/models/tenantModel'),
Vendor = require('./api/models/vendorModel'),
Expense = require('./api/models/expenseModel'),
Payment = require('./api/models/paymentModel'),


bodyParser = require('body-parser');

app.use(cors());

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://192.168.100.23/RMSDB');
mongoose.connect('mongodb://heroku_lthp37qx:191big1n8ak2juueopo4nc8qcr@ds143245.mlab.com:43245/heroku_lthp37qx');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use morgan to log requests to the console
app.use(morgan('dev'));

app.use(function (req, res, next) {
res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});

// Set up a URL route
app.get("/", function (req, res) {
res.send("Welcome to RMS Service!");
});

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('RMS Restful service started at port: ' + port);