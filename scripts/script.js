// Hamburger menu
const body = document.body;
const hamburgerBtn = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".site-navigation");


function openMenu() {
    body.classList.toggle("show");
    navigation.classList.add("activated");
}

function removeActivated() {
    navigation.classList.remove("activated");
}

hamburgerBtn.addEventListener("click", openMenu);
// Prevents the focus state from activating
hamburgerBtn.addEventListener('mousedown', function(e){
    e.preventDefault();
});

navigation.addEventListener("transitionend", removeActivated)


// Header image carousel
const slides = document.querySelectorAll(".carousel-image");
const navDots = document.querySelectorAll(".dot");
const contentSections = document.querySelectorAll(".content-section");

const autoSlideTimer = 4000;
// Automatically cycle through slide articles
function autoShowSlides() {
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


// Increase height of header based on viewport width
const header = document.querySelector("header");
function adjustHeaderHeight() {
    let viewportWidth = window.innerWidth;

    if (viewportWidth > 1400 && viewportWidth <= 1920) {
        let newHeight
        const minScreenWidth = 1400;
        const maxScreenWidth = 1920;

        const minHeight = 750;
        const maxHeight = window.innerHeight;

        // Calculate the height based on the viewport width
        newHeight = minHeight + ((viewportWidth - minScreenWidth) / (maxScreenWidth - minScreenWidth)) * (maxHeight - minHeight);

        header.style.height = `${newHeight}px`;
    } 
}

// Call the function initially and add an event listener for window resize
adjustHeaderHeight();
window.addEventListener('resize', adjustHeaderHeight);