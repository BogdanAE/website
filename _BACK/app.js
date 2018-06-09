const express = require('express');
var mongoose = require('./mongoose');
var model = require('./model');
var service = require('./service');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 3000;

mongoose.connect();

app.use('/', express.static(__dirname + '../_FRONT'));
app.use('/upload',express.static(__dirname + './addImage.html'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//LINK FROM EXPRESS TO MONGOOSE
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/connect', (req, res) => {
    res.send('server is up');
});

!(() => {
    app.get('/testimonials', (req, res) => {
        service.getTesti(res);
        // res.send('allgood');
    });
})();

app.post('/', (req, res) => {
    service.createTesti(req.body);
    console.log(req.body);
    res.redirect('/');
});

app.post('/upload', (req, res) => {
    service.postImage(req.body);
    res.send('images POSTED');
})

app.get('/images', (req, res) => {
    service.getImage(res);
    //res.redirect('/');
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
