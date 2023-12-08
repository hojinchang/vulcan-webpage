// Hamburger menu
const body = document.body;
const hamburgerBtn = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".site-navigation");


function openMenu(){
    body.classList.toggle("show");
    navigation.classList.add("activated");
}

hamburgerBtn.addEventListener("click", openMenu);
// Prevents the focus state from activating
hamburgerBtn.addEventListener('mousedown', function(e){
    e.preventDefault();
});


// Header image carousel
const slides = document.querySelectorAll(".carousel-image");
const navDots = document.querySelectorAll(".dot");
const contentSections = document.querySelectorAll(".content-section");

const autoSlideTimer = 4000;
// Automatically cycle through slide articles
const autoShowSlides = () => {
    slides.forEach(slide => {
        slide.classList.remove("active-slide");
    })
    navDots.forEach(dot => {
        dot.classList.remove("active-dot");
    })

    slideIdx++;
    if (slideIdx > slides.length) {slideIdx = 1};

    slides[slideIdx - 1].classList.add("active-slide");
    navDots[slideIdx - 1].classList.add("active-dot");
    
    autoShowSlidesTimeout = setTimeout(autoShowSlides, autoSlideTimer);
}

let slideIdx = 0;
let autoShowSlidesTimeout;
autoShowSlides();