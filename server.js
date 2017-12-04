var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    jwt = require('jsonwebtoken'),
    multer = require('multer'),


    User = require('./api/models/userModel'),
    Owner = require('./api/models/ownerModel'),
    Building = require('./api/models/buildingModel'),
    Tenant = require('./api/models/tenantModel'),
    Vendor = require('./api/models/vendorModel'),
    Expense = require('./api/models/expenseModel'),
    Payment = require('./api/models/paymentModel'),

    bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://192.168.100.23/RMSDB');
mongoose.connect('mongodb://heroku_r9hn0jzn:echn9ckdip4644i79p2j4blun8@ds129796.mlab.com:29796/heroku_r9hn0jzn');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set up a URL route
app.get("/", function (req, res) {
    res.send("Heroku Demo!");
});

var routes = require('./api/routes/routes');
routes(app);

app.listen(port);

console.log('Purdue list RESTful API server started on: ' + port); //comment