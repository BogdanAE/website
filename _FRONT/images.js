function changeImg(value){
    if( value == 1){
        if(document.querySelector(".imageBig").style.background == 'url("./srcs/1.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/6.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/6.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/5.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/5.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/4.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/4.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/3.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/3.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/2.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/2.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/1.jpg") 0% 0% / 100% 100% no-repeat'
        }
    }
    else if (value == 2){
        if(document.querySelector(".imageBig").style.background == 'url("./srcs/1.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/2.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/2.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/3.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/3.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/4.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/4.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/5.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/5.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/6.jpg") 0% 0% / 100% 100% no-repeat'
        }
        else if(document.querySelector(".imageBig").style.background == 'url("./srcs/6.jpg") 0% 0% / 100% 100% no-repeat'){
            document.querySelector(".imageBig").style.background ='url("./srcs/1.jpg") 0% 0% / 100% 100% no-repeat'
        }
    }
}

var canICloseIt = false;
var canICloseIt2 = false;
function createBigImage(imgValue) {
    dupli();
    if (document.querySelector(".imageBig").style.display == "none" && duplicates === false) {
        document.querySelector(".imageBig").style.display = "block";
        document.querySelector(".imageBig").style.background = "url('./srcs/" + parseInt(imgValue) + ".jpg')";

        document.querySelector(".imageBig").style.backgroundSize = "100% 100%";
        document.querySelector(".imageBig").style.backgroundRepeat = 'no-repeat';

        document.querySelector(".imageBig").style.filter = "blur(0.1px)";
        document.querySelector(".imageBig").style.filter = "grayscale(0%)";
        allGray.style.filter = "grayscale(100%) blur(2.3px)";
        scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });
    }
    setTimeout(() => {
        canICloseIt = true;
    }, 50);
}

close.addEventListener('click', function () {
    document.querySelector(".imageBig").style.display = "none";
    document.body.style.filter = "grayscale(0%)";
    allGray.style.filter = "grayscale(0%)";
    canICloseIt = false;
});

// bigImage.addEventListener('click', function () {
//     document.querySelector(".imageBig").style.display = "none";
//     allGray.style.filter = "grayscale(0%)";
//     canICloseIt = false;
// });

var clicker = addEventListener('click', () => {
    dupli();
    if (bigImage.style.display == 'block') {
        removeEventListener('click', clicker, { passive: true });
        canICloseIt = false;
        canICloseIt2 =false;
    }
    if (canICloseIt) {
        setTimeout(() => {
            if (document.querySelector(".imageBig").style.display == "block") {
                document.querySelector(".imageBig").style.display = "none";
                document.body.style.filter = "grayscale(0%)";
                allGray.style.filter = "grayscale(0%)";
                canICloseIt = false;
            }
        }, 60);
    }
    if (canICloseIt2) {
        setTimeout(() => {
            if (document.querySelector(".oferte").style.display == "block") {
                document.querySelector(".oferte").style.display = "none";
                document.body.style.filter = "grayscale(0%)";
                allGray.style.filter = "grayscale(0%)";
                document.getElementById("myHeader").style.filter = "grayscale(0%)";
                canICloseIt2 = false;
                buttonClass();
            }
        }, 60)
    }

});
//----------------------END IMAGE--------------------------------------------------

//-------------CAROUSEL--------------------------------------
setInterval(function () {
    if (testi1.style.visibility == "visible") {
        // console.log("aici1");
        testi1.style.visibility = "hidden";
        testi2.style.visibility = "visible";
        document.getElementById("circle2").style.backgroundColor = "black";
        document.getElementById("circle1").style.backgroundColor = "gainsboro";
    }
    else if (testi2.style.visibility == "visible") {
        // console.log("aici2");
        testi2.style.visibility = "hidden";
        testi3.style.visibility = "visible";
        document.getElementById("circle3").style.backgroundColor = "black";
        document.getElementById("circle2").style.backgroundColor = "gainsboro";
    }
    else if (testi3.style.visibility == "visible") {
        // console.log("aici3");
        testi3.style.visibility = "hidden";
        testi1.style.visibility = "visible";
        document.getElementById("circle1").style.backgroundColor = "black";
        document.getElementById("circle3").style.backgroundColor = "gainsboro";
    }
}, 4000);

circle1.addEventListener("click", function () {
    testi1.style.visibility = "visible";
    testi2.style.visibility = "hidden";
    testi3.style.visibility = " hidden";
    circle1.style.background = "black";
    circle2.style.background = "gainsboro";
    circle3.style.background = "gainsboro";
});

circle2.addEventListener("click", function () {
    testi2.style.visibility = "visible";
    testi1.style.visibility = "hidden";
    testi3.style.visibility = " hidden";
    circle2.style.background = "black";
    circle1.style.background = "gainsboro";
    circle3.style.background = "gainsboro";
});

circle3.addEventListener("click", function () {
    testi3.style.visibility = "visible";
    testi2.style.visibility = "hidden";
    testi1.style.visibility = " hidden";
    circle3.style.background = "black";
    circle2.style.background = "gainsboro";
    circle1.style.background = "gainsboro";
});

SD.addEventListener("click", function () {
    if (testi1.style.visibility == "visible") {
        // console.log("aici1");
        testi1.style.visibility = "hidden";
        testi2.style.visibility = "visible";
        document.getElementById("circle2").style.backgroundColor = "black";
        document.getElementById("circle1").style.backgroundColor = "gainsboro";
    }
    else if (testi2.style.visibility == "visible") {
        // console.log("aici2");
        testi2.style.visibility = "hidden";
        testi3.style.visibility = "visible";
        document.getElementById("circle3").style.backgroundColor = "black";
        document.getElementById("circle2").style.backgroundColor = "gainsboro";
    }
    else if (testi3.style.visibility == "visible") {
        // console.log("aici3");
        testi3.style.visibility = "hidden";
        testi1.style.visibility = "visible";
        document.getElementById("circle1").style.backgroundColor = "black";
        document.getElementById("circle3").style.backgroundColor = "gainsboro";
    }
});

SS.addEventListener("click", function () {
    if (testi1.style.visibility == "visible") {
        // console.log("aici1");
        testi1.style.visibility = "hidden";
        testi3.style.visibility = "visible";
        document.getElementById("circle3").style.backgroundColor = "black";
        document.getElementById("circle1").style.backgroundColor = "gainsboro";
    }
    else if (testi2.style.visibility == "visible") {
        // console.log("aici2");
        testi2.style.visibility = "hidden";
        testi1.style.visibility = "visible";
        document.getElementById("circle1").style.backgroundColor = "black";
        document.getElementById("circle2").style.backgroundColor = "gainsboro";
    }
    else if (testi3.style.visibility == "visible") {
        // console.log("aici3");
        testi3.style.visibility = "hidden";
        testi2.style.visibility = "visible";
        document.getElementById("circle2").style.backgroundColor = "black";
        document.getElementById("circle3").style.backgroundColor = "gainsboro";
    }
});
//-------------END CAROUSEL--------------------------------------