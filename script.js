const hamburger = document.querySelector("#menuBar")
const closeBtn = document.querySelector("#closeBtn")
const menu = document.querySelector("#menu")
hamburger.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})

closeBtn.addEventListener("click",()=>{
    menu.classList.toggle("hidden")
})

const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach(n => n.addEventListener("click", ()=>{
    menu.classList.remove("hidden")
}))