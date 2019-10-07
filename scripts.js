"use strict";

const navbBtn = document.querySelector('.nav-btn'),
      mainContainer = document.querySelector('.main-container');

navbBtn.addEventListener('mouseenter', function() {
        this.classList.toggle('open');
});

navbBtn.addEventListener('mouseleave', function() {
    this.classList.remove('open'); 
});

navbBtn.addEventListener('click', function() {
    if (mainContainer.classList) {
        mainContainer.classList.toggle('main-container-open');
    }
    else {
        mainContainer.classList.remove('main-container-open');
    }
});
