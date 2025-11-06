let menuToggle = document.querySelector('.toggle')
let sidebar = document.querySelector('.sidebar')

menuToggle.onclick = () => {
    menuToggle.classList.toggle('active')
    sidebar.classList.toggle('active')
}