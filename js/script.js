var slideNumber = 1;

showSlide(slideNumber);

function changeSlide(n) {
    showSlide(slideNumber+=n);
}

function currentSlide(n){
    showSlide(slideNumber = n);
}

function showSlide(n){
    var i;
    var slide = document.getElementsByClassName("slide");
    
    if (n>slide.length) {
        slideNumber = 1
    }
    if (n<1){
        slideNumber = slide.length
    }

    for (i=0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    slide[slideNumber-1].style.display = "block";
}