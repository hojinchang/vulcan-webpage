const body = document.body;
const hamburgerBtn = document.querySelector(".hamburger-menu");


function openMenu(){
    // nav.classList.add("activated");
    body.classList.toggle("show");
}
hamburgerBtn.addEventListener("click", openMenu);