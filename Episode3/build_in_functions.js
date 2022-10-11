// array filter
const customers = [
    {name: "customer1", email: "customer1@example.com", gender: "male", age: 25},
    {name: "customer2", email: "customer2@example.com", gender: "female", age: 34},
    {name: "customer3", email: "customer3@example.com", gender: "male", age: 35},
    {name: "customer4", email: "customer4@example.com", gender: "female", age: 18},
    {name: "customer5", email: "customer5@example.com", gender: "male", age: 76}
];

customers.filter(isMale);

const isMale = (arrayElement) => {
    return arrayElement.gender === "male" && arrayElement.age > 25;
}

// array map

customers.map(callback);
const addBookingtoAnObject = (element) => {
    element.booking = [];
    return element;
}

for(let i = 0; i < customers.length ; i++){
    for (let prop in customers[i]) {
        if(prop == email){
            console.log(customers[i][prop]);
        }
    }
}