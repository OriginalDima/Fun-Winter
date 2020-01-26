"use strict";

const navbBtn = document.querySelector('.nav-btn'),
      phoneNavBtn = document.querySelector('.phone-nav-btn'),
      mainContainer = document.querySelector('.main-container'),
      navBar = document.querySelector('.nav-bar'),
      phoneNavBar = document.querySelector('.phone-nav-bar'),
      mainHead = document.querySelector('.main-head'),
      arrowBtn = document.querySelector('.arrow-btn');

      console.log(arrowBtn);
      

navbBtn.addEventListener('mouseenter', function() {
    this.classList.toggle('btnOpen');
});

navbBtn.addEventListener('mouseleave', function() {
    this.classList.remove('btnOpen'); 
});

navbBtn.addEventListener('click', function() {
    if (mainContainer.classList) {
        mainContainer.classList.toggle('main-container-open');
        navBar.classList.toggle('nav-bar-open');
        phoneNavBar.classList.toggle('phone-nav-bar-open');
        mainHead.classList.toggle('main-head-open');
    }
    else {
        mainContainer.classList.remove('main-container-open');
        navBar.classList.remove('nav-bar-open');
        phoneNavBar.classList.remove('phone-nav-bar-open');
        mainHead.classList.remove('main-head-open');
    }
});

arrowBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

