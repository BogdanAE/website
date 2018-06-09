const mongoose = require('mongoose');
var schema = require('./schema');

var testi = mongoose.model('testi', schema.testiS, 'testis');
var image = mongoose.model('image',schema.images, 'images');

module.exports = {
   testi: testi,
   image: image
}