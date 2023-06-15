//главное окно, бургер меню адаптива
let burger = document.querySelector('.header__burger')
console.log(burger)
document.querySelector('.menu').addEventListener('click', function(){
    burger.classList.toggle('show-burger');
})
document.querySelector('.burger-close').addEventListener('click', function(){
    burger.classList.toggle('show-burger');
})
//1 окно, фильтрация/табы
let tab = document.querySelectorAll('.filter-content')
let btnf = document.querySelectorAll('.filter-btn')
let windowf = document.querySelector('.window-1-wrap')

// console.log(windowf)
// console.log(tab)


function filterWindow(n){
    if (n!=='all') {
        windowf.classList.remove('window-1-wrap');
        windowf.classList.add('window-1-wrap-filtered');
    }
    else {
        windowf.classList.add('window-1-wrap');
        windowf.classList.remove('window-1-wrap-filtered');
    }
    for (l=0; l<btnf.length; l++){
        if (btnf[l].className.indexOf(n)===-1){
            btnf[l].classList.remove('filter-btn-active');
            btnf[l].classList.add('filter-btn-inactive');
        }
        else{
            btnf[l].classList.remove('filter-btn-inactive');
            btnf[l].classList.add('filter-btn-active');
        }
    }
    for (k=0; k<tab.length; k++) {
        if (tab[k].className.indexOf(n) !== -1){
            tab[k].classList.remove("hide");
            tab[k].classList.add('show');
            tab[k].classList.add('filtered-content');
        }
        if (tab[k].className.indexOf(n) === -1){
            tab[k].classList.remove("show");
            tab[k].classList.add('hide');
            tab[k].classList.remove('filtered-content');
        }
        if (n==='all'){
            tab[k].classList.remove("hide");
            tab[k].classList.add("show");
            tab[k].classList.remove('filtered-content');
        }
        console.log(tab[k]);
    }
}






//2 окно, модальное окно
const modalButton = document.querySelectorAll('.modal-btn'); //все кнопки
const modals = document.querySelector('.window-2__descr-1'); //оверлей
const modalWindow = document.querySelectorAll('.modal'); //окна

// console.log(modalWindow)
modalButton.forEach((el) => {
    el.addEventListener('click', (e)=>{
        let bpath = e.currentTarget.getAttribute('data-path'); //тэг кнопки
        // console.log(bpath);
        // console.log(modals);
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
let accMain = document.querySelectorAll(".accordeon");
console.log(accMain);

for (j=0; j<acc.length; j++) {
    acc[j].onclick = function () {
        this.classList.toggle("active");
        this.parentElement.parentElement.classList.toggle("panel-adaptive");
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