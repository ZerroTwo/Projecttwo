
let header__burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');
let repeat = document.querySelector('#repeats');


header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    menu.classList.toggle('active');
    back.classList.toggle('lock');
    repeats.classList.toggle('repeat');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
}


 repeat.onclick = function(){
	header__burger.classList.remove('active');
    menu.classList.remove('active');
    back.classList.remove('lock');
    repeats.classList.remove('repeat');
 }
