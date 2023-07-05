const toggleButton = document.getElementsByClassName("toggle-button")[0]
const navbarLink = document.getElementsByClassName("navbar-link")[0]

const idFootball = document.getElementById('football')
const idGolf = document.getElementById('golf')
const idRugby = document.getElementById('rugby')
const idF1 = document.getElementById('f1')






idFootball.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})

idGolf.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})


idRugby.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})

idF1.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})









toggleButton.addEventListener('click', () => {
    navbarLink.classList.toggle('active')
})