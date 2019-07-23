"use strict";

const navbBtn = document.querySelector('.nav-btn');
const mobileWidth = document.querySelector('.nav-mobile-width');
const mainConteiner = document.querySelector('.main-container');

navbBtn.addEventListener('click', function() {
    if (mobileWidth.classList) {
        this.classList.toggle('open');
        mobileWidth.classList.toggle('nav-mobile-width-active');
        mainConteiner.classList.toggle('main-container-active');
    } else {
        this.classList.remove('open'); 
        mobileWidth.classList.remove('nav-mobile-width-active');
        mainConteiner.classList.remove('main-container-active');
    }    
});