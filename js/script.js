//2 окно, модальное окно


// 3 окно, аккордеон
var acc = document.getElementsByClassName("accordeon-btn");
var j;

for (j=0; j<acc.length; j++) {
    acc[j].onclick = function () {
        this.classList.toggle("active");

        this.nextElementSibling.classList.toggle("show");      
    }
}



// 4 окно, слайдер

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