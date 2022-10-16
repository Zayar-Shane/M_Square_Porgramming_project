// shopping List
 // <i class="fa-sharp fa-solid fa-trash"></i>
const inputField = document.getElementsByClassName("form-control")[0];
const shoppingListTag = document.getElementsByClassName("shoppingListContainer")[0];

let productId = 1;
const changeHandler = (event) => {
    const inputValue = event.target.value;
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("productContainer");

    const divElement = document.createElement("div");
    divElement.classList.add("productName");
    divElement.addEventListener("click", () => {
        let classExist = divElement.classList.contains("purchased");
        if(classExist){
            divElement.classList.remove("purchased");
        }else{
            divElement.classList.add("purchased");
        }
    });

    const shoppingItem = document.createElement("span");
    shoppingItem.id = productId;

    const trashIcon = document.createElement("i");
    trashIcon.classList.add("fa-sharp","fa-solid","fa-trash");
    trashIcon.addEventListener("click", () => {
        parentDiv.remove();
    });

    let product = productId.toString() + ". " + inputValue;
    shoppingItem.append(product);
    divElement.append(shoppingItem);
    shoppingListTag.append(parentDiv);
    parentDiv.append(divElement,trashIcon)
    inputField.value = "";
    productId += 1;
}

inputField.addEventListener("change", changeHandler);