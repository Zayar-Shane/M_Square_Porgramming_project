// CRUD in DOM Js 
// C = create , R = read, U = update , D = delete

// create

const h1Element = document.createElement("h1");
const textElement = document.createTextNode("Welcome to Myanmar!");
h1Element.appendChild(textElement);

const tagCollection = document.getElementsByTagName("body");
console.log("What bodyElement is ", tagCollection); //HTML collections 

const bodyElement = tagCollection[0];
bodyElement.appendChild(h1Element);

// read
const readElement = document.getElementsByTagName("h1")[0];
console.log("Text inside the h1 element before update " , readElement.textContent);

// update
readElement.textContent = "Welcome To China!";
console.log("Text inside the h1 element after update ", readElement.textContent);

// delete 
readElement.remove();