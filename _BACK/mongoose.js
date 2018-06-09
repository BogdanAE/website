const mongoose = require('mongoose');

const URL = 'mongodb://test:test1234@ds247310.mlab.com:47310/heroku_r912ml3x';

mongoose.connect(URL);

var DB = mongoose.connection;

var connect;

connect = () => {
    DB.on('error', (err) => {
        console.log('Could NOT connect to Mongoose Server!');
    }),
    DB.on('open', () => {
        console.log('Connected to Mongoose servers');
    })
};

module.exports = {
    connect: connect,
}