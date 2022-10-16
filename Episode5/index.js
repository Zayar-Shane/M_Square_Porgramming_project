// Event in js and add event listener

const btnElement = document.getElementById("myButton");
const imgElement = document.getElementsByClassName("image")[0];
const imgArray = [
    "https://cdn.pixabay.com/photo/2022/10/07/06/11/verbena-7504222__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/22/14/14/town-7472451__340.png",
    "https://cdn.pixabay.com/photo/2022/10/04/14/18/botanical-7498322__340.jpg",
    "https://cdn.pixabay.com/photo/2022/08/22/10/01/tree-7403295__340.jpg",
    "https://cdn.pixabay.com/photo/2022/09/14/14/36/window-7454482__340.jpg",
];

let count = 0;
const myFunction = () => {
    if(count === 5){
        count = 0;
        imgElement.src = "https://cdn.pixabay.com/photo/2022/09/08/05/35/fog-7440132__340.jpg";
        return;
    }

    imgElement.src = imgArray[count];
    count += 1;
    console.log("count is ", count); 
}

btnElement.addEventListener("click", myFunction);

