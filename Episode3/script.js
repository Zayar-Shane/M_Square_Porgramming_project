// object 
// to create an object we use {} 

const person1 = {
    name : "Aung Paing",
    age : "50",
    height: 180,
    city : "Yangon",
    dateOfBirth : 1970,
    isActor : true,
    walk : () => {
        alert("Aung Pading is walking");
    }
}

// Accessing object's properties and methods
// (1) dot notation
person1.name;
person1.age;
person1.height;
person1.city;
person1.dateOfBirth;
person1.isActor;
person1.walk();

// (2) bracket notation
person1["name"];
person1["age"];
person1["height"];
person1["city"];
person1["dateOfBirth"];
person1["isActor"];
person1["walk"]();


// object (part 2)

const person2 = {
    name : "Aung Aung",
    age : 50,
    height : 180,
    city : "Yangon",
    dateOfBirth : 1970,
    isActor : true,
    walk : () => {
        alert("Aung Aung is walking now...")
    }
}

const car = {
    name : "Toyota",
    modal : 2019,
    price : 1290000,
}

//setting new properties and methods
person2.hobby = "Programming";
person2.isMale = true;
person2.eat = () => { alert("Aung Aung is eating ... ") };

// donated by Mg Mg
const inputValue1 = "";
const inputValue2 = "";
const propertyName = "DonatedBy" + inputValue1
// donatedByMgMg
person2[propertyName] = inputValue2;


// Array 

{} // empty object , unordered collections
[] // empty array , ordered collections 

const unordered = {z : "HELLO" , 1 : "WORLD", a : "TEST"};
const ordered = ["Yangon" , "Mandalay", "Myitkyina"];

// accessing array element
ordered[1];
ordered[2];
ordered[3];

// array length property
ordered.length;

// push methods
ordered.push("Taunggyi");

// remove interval array element
ordered.splice(positionToRemove, RemoveCount);

// object arrays
const customers = [
    {name: "customer1", age: 14, height: 140, dataOfBirth: "12.3.2003", email : "hein@example.com"},
    {name: "customer2", age: 14, height: 140, dataOfBirth: "12.3.2003", email : "yan@example.com"},
    {name: "customer3", age: 14, height: 140, dataOfBirth: "12.3.2003", email : "wai@example.com"},
    {name: "customer4", age: 14, height: 140, dataOfBirth: "12.3.2003", email : "than@example.com"},
    {name: "customer5", age: 14, height: 140, dataOfBirth: "12.3.2003", email : "yar@example.com"}
];

for(let i = 0 ; i < customers.length ; i++){
    let customerEmail = customers[i].email;
    sentMail(customerEmail);
}


const sentMail = (email) => {
    console.log("Sending Mail to " + email)
}


// for loop
const city = ["Yangon", "Beijin", "Mandalay", "Mogoke", "Taunggyi"];
for(let i = 0 ; i < city.length ; i++){
    console.log(city[i]);
}

// for in loop
 const persons = {name : "person1", phoneNumber : "12333", email : "yan@example.com"};
 for (let propertyName in persons){
    console.log(propertyName);
 }

// while loop
let validNumber = true;
while (validNumber) {
    let promptNumber = prompt("Please enter a number between 1 and 100.");
    let parsedNumber = parseInt(promptNumber, 10);
    
    if(parsedNumber > 1 && parsedNumber < 100){
        console.log("Entered number is " + parsedNumber);
        validNumber = false; //exit code
    }
}

// Destructuring, spread operator and rest parameter (ES6 JavaScript )
// object destructuring
const man = {name: "man1", email: "man@example.com", gender: "male"};
// const name = man.name;
// const email = man.email;
// const gender = man.gender;

// ES6 syntax
const {name, email, gender} = man;
console.log(name, email, gender);

// Array destructuring
  // const countryOne = countries[0];
// const countryTwo = countries[1];
// const countryThree = countries[2];

// ES6 syntax 
const [countryOne, countryTwo, countryThree] = countries;
console.log(countryOne, countryTwo, countryThree);

// spread operator
// spread operator in object
const animals = {name: "dog", species: "Rhino", isAnimal: true};
const copyAnimals = Object.assign({}, animals);

// ES6 syntax
const copy_animals = {...animals};

// spread operator in arrays
const animal = ["dog", "cat", "cow"];
const copyAnimal = [].concat(animal);
// ES6 syntax
const copy_animal = [...animal];

// Rest parameter in function
const calculate = (...params) => {
    console.log(params);
}
calculate(1, 2, 3, 4, 5 );