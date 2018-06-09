var mongoose =  require('mongoose');

var testiS = mongoose.Schema({
    name: String,
    title: String,
    message: String,
    avatar: String,
});

var images = mongoose.Schema({
    path: String
})

module.exports = {
    testiS: testiS,
    images: images
}