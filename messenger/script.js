menuButton = document.querySelector(".menuIcon");
menuBar = document.querySelector(".menuContainer");
menuButton.addEventListener("click" , () => {
    menuBar.classList.toggle("active");
})