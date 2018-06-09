const model = require('./model');
const fs = require('fs');
const path = require("path");

var createTesti;
var getTesti;
var getImage;
var postImage;

createTesti = (data) => {
    var item = model.testi({
        name: data.name,
        title: data.title,
        avatar: data.avatar,
        message: data.message
    });
    item.save((err, item) => {
        if (err) {
            console.log(err);
            return err;
        }
        //console.log(item);
    });
};

postImage = (i) => {
    var path = model.image({
        path: '../_FRONT/srcs/' + i.i + '.jpg',
    });
    path.save((err, path) => {
        if(err)
            console.log(err)
        console.log(path);
    });
}

getImage = (res) => {
    model.image.find({}, (err,data) =>{
        if(err){
            console.log(err);
        }
        res.send(data   );
        console.log('IMAGES REQUESTED');
    })
};

getTesti = (res) => {
    model.testi.find({}, (err, data) => {
        if(err){
            console.log(err);
        }
        console.log('TESTIMONIALS requested');
        res.send(data);
    });
};

module.exports = {
    createTesti: createTesti,
    getTesti: getTesti,
    getImage: getImage,
    postImage: postImage
}