"use strict";

const navbBtn = document.querySelector('.nav-btn'),
      mainContainer = document.querySelector('.main-container'),
      navBar = document.querySelector('.nav-bar'),
      arrowBtn = document.querySelector('.arrow-btn');

      console.log(arrowBtn);
      

navbBtn.addEventListener('mouseenter', function() {
        this.classList.toggle('open');
});

navbBtn.addEventListener('mouseleave', function() {
    this.classList.remove('open'); 
});

navbBtn.addEventListener('click', function() {
    if (mainContainer.classList) {
        mainContainer.classList.toggle('main-container-open');
        navBar.classList.toggle('nav-bar-open');
    }
    else {
        mainContainer.classList.remove('main-container-open');
        navBar.classList.remove('nav-bar-open');
    }
});

arrowBtn.addEventListener('click', function() {
    window.scrollTo(0, 0);
});

