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