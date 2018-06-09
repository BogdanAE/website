//-------GLOBALS----------------------------------
var media = window.matchMedia('(max-width: 1300px)');
var media2 = window.matchMedia('(min-width: 1301px)');
var oferte1 = document.getElementById("oferte");
var ofertaClass = document.querySelector(".oferte");
var upButton = document.querySelector(".buttonUp");
var img1 = document.getElementById("img1");
var close = document.querySelector(".xClose");
var bigImage = document.querySelector(".imageBig");
var counter = 0;
var testi1 = document.getElementById("text1");
var testi2 = document.getElementById("text2");
var testi3 = document.getElementById("text3");
var circle1 = document.getElementById("circle1");
var circle2 = document.getElementById("circle2");
var circle3 = document.getElementById("circle3");
var direction;
var enabled = true;
var duplicates = false;
var maxHeight = window.innerHeight;
var SD = document.getElementById("sageataDr");
var SS = document.getElementById("sageataSt");
var rezerva = document.getElementById("rezB");
var homeButton = document.getElementById("homeB");
var allGray = document.getElementById("graySc");
var about = document.getElementById("aboutButton");
var testiBut = document.getElementById('allTestimonials');

!(() => {
    document.querySelector(".oferte").style.display = "none";
    document.querySelector(".imageBig").style.display = "none";
    document.querySelector('.reservationPage').style.display = 'none';
    document.getElementById('myAside').style.opacity = 0;
    document.querySelector('main').style.opacity = 0;
    document.querySelector('.testimoniale').style.opacity = 0;
    document.getElementById('aboutPage').style.display = 'none';
    document.getElementById('testiPage').style.display = 'none';
})();


//-------END GLOBALS----------------------------------


//------------VALIDATION-------------------------------
function dupli() {
    var bigImg = document.querySelector('.imageBig').style.display;
    var ofert = document.querySelector(".oferte").style.display;
    if (bigImg == 'block' || ofert == 'block')
        duplicates = true;
    else if ((bigImg == 'none') && (ofert == 'none'))
        duplicates = false;
    //console.log(duplicates);
};

addEventListener("keydown", function (val) {
    if (val.keyCode == 27)
        init();
});



function checkIt(enabled) {
    if (enabled == true) {
        document.querySelector(".buttonUp").style.display = "block";
        document.querySelector(".verticalImage").style.display = "block";
        document.querySelector(".testimoniale").style.display = "block";
        document.querySelector("#verticalImage").style.display = "block";
        document.querySelector(".topFooterContainer").style.display = "block";
        document.querySelector("#myFooter").style.display = "block";
        document.querySelector("#myAside").style.display = "block";
        document.querySelector("#myHeader").style.display = "block";
        allGray.style.display = "block";
        document.getElementById("myHeader").style.filter = "grayscale(0%)";
    }
    else {
        // console.log(enabled);
        document.querySelector(".buttonUp").style.display = "none";
        document.querySelector(".verticalImage").style.display = "none";
        document.querySelector(".testimoniale").style.display = "none";
        document.querySelector("#verticalImage").style.display = "none";
        document.querySelector(".topFooterContainer").style.display = "none";
        document.querySelector("#myFooter").style.display = "none";
        document.querySelector("#myAside").style.display = "none";
        document.querySelector("#myHeader").style.display = "none";
        allGray.style.display = "none";
        document.getElementById("myHeader").style.filter = "grayscale(0%)";
    }
};

function checkAll() {
    var form = document.getElementById('resForm');
    if ((form[0].value.length !== 0 && form[0].value.length >= 2) && (form[1].value.length !== 0 && form[1].value.length >= 2) &&
        (form[2].value.length !== 0 && form[2].value.length >= 2) && !compareDates()) {
        alert('Data invalida');
        console.log('aici');
        return;
    }
    else if ((form[0].value.length !== 0 && form[0].value.length >= 2) && (form[1].value.length !== 0 && form[1].value.length >= 2) &&
        (form[2].value.length !== 0 && form[2].value.length >= 2) && compareDates()) {
        alert('REZERVARE FINALIZATA');
        setTimeout(() => {
            window.location.href = './index.html';
            document.querySelector('.scrollDiv').style.height = 'calc(100vh + 50px)';
        }, 1500);
    }
};

function compareDates() {
    //Get the text in the elements
    var from = document.getElementById('startDate').value;
    console.log(from);
    var to = document.getElementById('endDate').value;

    //Generate an array where the first element is the year, second is month and third is day
    var splitFrom = from.split('/');
    var splitTo = to.split('/');

    //Create a date object from the arrays
    var fromDate = Date.parse(splitFrom[0], splitFrom[1] - 1, splitFrom[2]);
    var toDate = Date.parse(splitTo[0], splitTo[1] - 1, splitTo[2]);

    //Return the result of the comparison
    console.log(fromDate < toDate)
    return fromDate < toDate;
};

function buttonClass() {
    if (document.querySelector('.oferte').style.display == 'block')
        document.querySelectorAll('button')[3].classList.add('activeB');
    else if (document.querySelector('.oferte').style.display == 'none')
        document.querySelectorAll('button')[3].classList.remove('activeB');

    if (document.getElementById("aboutPage").style.display == 'block')
        document.querySelectorAll('button')[2].classList.add('activeB');
    else if (document.getElementById("aboutPage").style.display == 'none')
        document.querySelectorAll('button')[2].classList.remove('activeB');

    if (document.querySelector(".reservationPage").style.display == 'block')
        document.querySelectorAll('button')[4].classList.add('activeB');
    else if (document.querySelector(".reservationPage").style.display == 'none')
        document.querySelectorAll('button')[4].classList.remove('activeB');
}
//------------END VALIDATION-------------------------------

function closeCurrentWindow(currentWindow) {
    if (currentWindow == 'big') {
        console.log('aici');
        document.querySelector('.imageBig').style.display = 'none';
        allGray.style.filter = "grayscale(0%)";
    }
}

init();

function init() {
    // dupli();
    var enabled = true;
    testi1.style.visibility = "visible";
    testi2.style.visibility = "hidden";
    testi3.style.visibility = "hidden";
    ofertaClass.style.display = "none";
    document.getElementById("circle1").style.backgroundColor = "black";
    document.getElementById("meniuRezervare").style.display = "none";
    allGray.style.filter = "grayscale(0)";
    document.querySelector(".imageBig").style.display = "none";
    document.getElementById("myHeader").style.filter = "grayscale(0%)";
    upButton.style.display = 'none';
    document.querySelector('.oferteM:nth-child(2)').style.overflowY = "hidden";
    buttonClass();
}

oferte1.addEventListener('click', function () {
    dupli();
    if (document.querySelector(".oferte").style.display == "none" && duplicates === false) {
        document.querySelector(".oferte").style.display = "block";
        allGray.style.filter = "grayscale(100%)";
        document.querySelector(".oferte").style.filter = "blur(0.1px)";
        document.getElementById("myHeader").style.filter = "grayscale(100%)";
        scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });
    }
    else if (!duplicates) {
        document.querySelector(".oferte").style.display = "none";
        allGray.style.filter = "grayscale(0%)";
        document.getElementById("myHeader").style.filter = "grayscale(0%)";
        canICloseIt2 = false;
    }
    else if (document.querySelector(".oferte").style.display == "block" && duplicates === false) {
        document.querySelector(".oferte").style.display = "none";
        allGray.style.filter = "grayscale(0%)";
        document.getElementById("myHeader").style.filter = "grayscale(0%)";
        canICloseIt2 = false;
    }
    else if (document.querySelector(".oferte").style.display == "none" && duplicates === true && document.querySelector('.imageBig').style.display == 'block') {
        document.querySelector('.imageBig').style.display = 'none';
        document.querySelector(".oferte").style.display = "block";
        allGray.style.filter = "grayscale(100%)";
        document.getElementById("myHeader").style.filter = "grayscale(0%)";
        canICloseIt2 = false;
        duplicates = false;
    }
    setTimeout(() => {
        canICloseIt2 = true;
    }, 50);
    buttonClass();
});

about.addEventListener("click", function () {
    enabled = false;
    if (document.querySelector(".reservationPage").style.display == 'block') {
        document.querySelector(".reservationPage").style.display = 'none';
    }
    document.getElementById("aboutPage").style.display = 'block';
    document.querySelector('.scrollDiv').style.height = '100%';
    checkIt(enabled);
    window.scroll(0, 0);
    buttonClass();
});

ofertaClass.addEventListener("click", function () {
    document.querySelector(".oferte").style.display == "none"
    allGray.style.filter = "grayscale(0%)";
    document.getElementById("myHeader").style.filter = "grayscale(0%)"
});

document.querySelector(".oferte").addEventListener("click", function () {
    if (document.querySelector(".oferte").style.display == "block") {
        document.querySelector(".oferte").style.display = "none";
        //console.log("e ok");
        buttonClass();
        canICloseIt2 = false;
    }
});

//----------------IMAGES------------------------------------------


// if (enabled == true)
// {
//     logScrollDirection();
// }

upButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});

//------------------GOOGLE MAPS----------------------------------
function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(46.835976, 23.715579),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    var marker = new google.maps.Marker({
        position: { lat: 46.835976, lng: 23.715579 },
        map: map
    })
};
//------------------END GOOGLE MAPS----------------------------------

rezerva.addEventListener("click", function () {
    enabled = false;
    if (document.getElementById("aboutPage").style.display == 'block') {
        document.getElementById("aboutPage").style.display = 'none';
    }
    document.querySelector(".reservationPage").style.display = 'block';
    // console.log(enabled);
    document.querySelector('.scrollDiv').style.height = '100%';
    checkIt(enabled);
    window.scroll(0, 0);
    buttonClass();
});

homeButton.addEventListener("click", function () {
    enabled = true;
    //console.log(enabled);
    checkIt(enabled);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    init();
    document.querySelector('.scrollDiv').style.height = 'calc(100vh + 50px)';
    document.getElementById('aboutPage').style.display = 'none';
    document.querySelector('.reservationPage').style.display = 'none';
    document.getElementById("testiPage").style.display = 'none';
    buttonClass();
});

!(function copyright() {
    var date = new Date().getFullYear();
    //console.log(date);
    document.querySelector('.copyright').innerHTML = '&copy' + date + ' Epure Bogdan-Alin';
})();

addEventListener('resize', () => {
    //console.log('overflow');
    if (document.querySelector('.oferteM').offsetWidth < 500)
        document.querySelector('.oferteM:nth-child(2)').style.overflowY = "scroll";
    else if (document.querySelector('.oferteM').offsetWidth >= 500)
        document.querySelector('.oferteM:nth-child(2)').style.overflowY = "hidden";
});

reservDate();
function reservDate() {
    var dt = new Date();
    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var day = dt.getDay();

    if (dt.getMonth() < 10)
        month = '0' + month;
    if (dt.getDay() < 10)
        day = '0' + dt.getDay();

    document.getElementById('startDate').setAttribute('value', year + '-' + month + '-' + day);
    day = dt.getDay();
    if (dt.getDay() < 10)
        day = '0' + day;
    document.getElementById('endDate').setAttribute('value', year + '-' + month + '-' + day);
}

//-----------------------------------------------------------------------------------------
//----------------------TESTIMONIALS PAGE--------------------------------------------------
//-----------------------------------------------------------------------------------------

testiBut.addEventListener('click', () => {
    enabled = false;
    document.getElementById("testiPage").style.display = 'block';
    document.querySelector('.scrollDiv').style.height = '100%';
    checkIt(enabled);
    window.scroll(0, 0);
    buttonClass();
    // createTestiPage();
});

// function createTesti() {
//     for (let i = 1; i <= 3; i++) {
//         var div = document.createElement('div');
//         document.getElementById('text' + i).appendChild(div);
//         var figure = document.createElement('figure');
//         div.appendChild(figure);
//         var img = document.createElement('img');
//         img.src = persons.person1.avatar[i - 1];
//         img.setAttribute('height', '150px');
//         img.setAttribute('border', '2px');
//         figure.appendChild(img);
//         var figcaption = document.createElement('figcaption');
//         figcaption.innerHTML = persons.person1.name[i - 1];
//         figure.appendChild(figcaption);
//         var title = document.createElement('h4');
//         title.innerHTML = 'Titlu:  <u>' + persons.person1.title[i - 1] + '</u>';
//         div.appendChild(title);
//         var txt = document.createElement('p');
//         txt.innerHTML = '<b>A spus:</b>  <q>' + persons.person1.text[i - 1] + '</q>';
//         div.appendChild(txt);
//     }
// }


// function createTestiPage() {
//     let vf = persons.person1.text.length;
//     if (vf != document.querySelectorAll('#testiPage > div').length) {
//         for (let i = 1; i <= 3; i++) {
//             var div = document.createElement('div');
//             document.getElementById("testiPage").appendChild(div);
//             div.setAttribute('id', 'divv');
//             var figure = document.createElement('figure');
//             div.appendChild(figure);
//             var img = document.createElement('img');
//             img.src = persons.person1.avatar[i - 1];
//             img.setAttribute('height', '150px');
//             img.setAttribute('border', '2px');
//             figure.appendChild(img);
//             var figcaption = document.createElement('figcaption');
//             figcaption.innerHTML = persons.person1.name[i - 1];
//             figure.appendChild(figcaption);
//             var title = document.createElement('h4');
//             title.innerHTML = 'Titlu:  <u>' + persons.person1.title[i - 1] + '</u>';
//             div.appendChild(title);
//             var txt = document.createElement('p');
//             txt.innerHTML = '<b>A spus:</b>  <q>' + persons.person1.text[i - 1] + '</q>';
//             div.appendChild(txt);
//         }
//     }
// }

//-----------------------------------------------------------------------------------------
//----------------------END TESTIMONIALS PAGE--------------------------------------------------
//-----------------------------------------------------------------------------------------

