console.log('hello jey')

let icon = document.getElementById('icon')
let headar = document.getElementById('headar')
let rigthlogin = document.getElementById('rigthlogin')

icon.addEventListener('click', () => {
    if (headar.style.transform != 'translate(0rem, 0rem)') {
        headar.style.transform = 'translate(0rem, 0rem)'
        IdBars.classList.remove('fa-bars')
        IdBars.classList.add('fa-xmark')
    } else {
        headar.style.transform = 'translate(-50rem, 0rem)'
        IdBars.classList.remove('fa-xmark')
        IdBars.classList.add('fa-bars')
    }
})

rigthlogin.addEventListener('click', () => {
    alert("Sorry! Dummy Login Page!!");
})


const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});