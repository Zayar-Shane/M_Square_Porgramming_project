const hamburgerMenuContainerTag = document.querySelector(".hambugerMenuContainer");
const line1DivTag = document.querySelector(".line1");
const line2DivTag = document.querySelector(".line2");
const line3DivTag = document.querySelector(".line3");
const menuContainerTag = document.querySelector(".menuContainer");
const liTag = document.querySelectorAll("li");
console.log(liTag)

hamburgerMenuContainerTag.addEventListener("click", () => {
    if(hamburgerMenuContainerTag.classList.contains("isOpened")){
        hamburgerMenuContainerTag.classList.remove("isOpened");
        line2DivTag.classList.remove("hideLine2Div");
        line1DivTag.classList.remove("line1plus45Deg");
        line3DivTag.classList.remove("line3minus45Deg");
        menuContainerTag.classList.remove("menuOpacity");
        for(let i = 0; i < liTag.length; i++) {
            liTag[i].classList.remove("moveLiUp");
        }

    }
    else {
        hamburgerMenuContainerTag.classList.add("isOpened");
        line2DivTag.classList.add("hideLine2Div");
        line1DivTag.classList.add("line1plus45Deg");
        line3DivTag.classList.add("line3minus45Deg");
        menuContainerTag.classList.add("menuOpacity");
        for(let i = 0; i < liTag.length; i++) {
            liTag[i].classList.add("moveLiUp");
        }
    }
})