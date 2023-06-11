//2 окно, модальное окно
const modalButton = document.querySelectorAll('.modal-btn'); //все кнопки
const modals = document.querySelector('.window-2__descr-1'); //оверлей
const modalWindow = document.querySelectorAll('.modal'); //окна

console.log(modalWindow)
modalButton.forEach((el) => {
    el.addEventListener('click', (e)=>{
        let bpath = e.currentTarget.getAttribute('data-path'); //тэг кнопки
        console.log(bpath);
        console.log(modals);
        modals.style.display = 'block';
        
        for (c=0; c<modalWindow.length; c++) {
            let windowcomp = modalWindow[c].getAttribute('data-target'); //извлечь тэг окон
            if (windowcomp===bpath) {
                modalWindow[c].style.display = "block";
            }
        }

    });
});

function hideWindow(n){
    modals.style.display = 'none';
    
    for (c=0; c<modalWindow.length; c++) {
        let windowcomp = modalWindow[c].getAttribute('data-target'); //извлечь тэг окон
        if (windowcomp===n) {
            modalWindow[c].style.display = "none";
        }
    }
}

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