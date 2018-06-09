var media = window.matchMedia('(max-width: 1300px) and (min-width: 591px)');
var media2 = window.matchMedia('(min-width: 1301px)');


logScrollDirection();
function logScrollDirection() {
    var previous = window.scrollY;
    window.addEventListener('scroll', function () {
        window.scrollY > previous ? direction = "down" : direction = "up";
        if (media.matches) {
            previous = 25 + window.scrollY;
        }
        if (media2.matches) {
            previous = 15 + window.scrollY;
            // document.querySelector('.scrollDiv').style.height = "calc(100vh + 100px)";
        }
        // console.log(direction);
        if (direction == "down") {
            if (window.scrollY >= 0 && window.scrollY <= maxHeight && enabled == true) {
                window.scrollTo({ top: window.innerHeight, left: 0, behavior: 'smooth' });
            }
        }
        if (window.scrollY === (maxHeight))
            document.querySelector('.buttonContainer').style.position = 'fixed';
        else if (window.scrollY < (maxHeight))
            document.querySelector('.buttonContainer').style.position = 'static';
        if (window.scrollY >= maxHeight)
            upButton.style.display = 'block';
        else if (window.scrollY < maxHeight / 1.5) {
            upButton.style.display = 'none';
            document.getElementById('myAside').style.opacity = 0;
            document.querySelector('main').style.opacity = 0;
            document.querySelector('.testimoniale').style.opacity = 0;
        }
    });
};

addEventListener('scroll',
    function appear() {
        if (window.scrollY >= (0.2 * window.innerHeight)) {
            //console.log('aside');
            document.getElementById('myAside').style.transition = '2s ease';
            document.getElementById('myAside').style.opacity = 1;

            document.querySelector('main').style.transition = 'opacity 2s ease';
            document.querySelector('main').style.opacity = 1;
        }
        if (window.scrollY >= (1.1 * window.innerHeight)) {
            //console.log('testimoniale');
            document.querySelector('.testimoniale').style.transition = 'opacity 2s ease';
            document.querySelector('.testimoniale').style.opacity = 1;
        }
        if (window.scrollY < (0.3 * window.innerHeight)) {
            init();
            // duplicates = true;
        }
        if (window.scrollY <= window.innerHeight && (document.querySelector('.imageBig').style.display == 'block'
            || document.querySelector('.oferte').style.display == 'block')) {
            window.scrollTo({ left: 0, top: window.innerHeight, behavior: 'smooth' });
        }
    });



