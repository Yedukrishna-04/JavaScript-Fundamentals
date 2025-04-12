var person = {
     firstName : "Jhon",
     lastName : "Doe",
     age : 30
}

// console.log(person);

// dot notation
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);

//bracket notation
// console.log(person["firstName"]);
// console.log(person['lastName']);
// console.log(person['age']);

// var twoWheeler = {
//     brand: "Honda",
//     model: "Activa DLX 110 ODB2B",
//     year: 2025
// }

// console.log(twoWheeler);

// console.log(twoWheeler.brand);
// console.log(twoWheeler.model);
// console.log(twoWheeler.year);

// console.log(twoWheeler["brand"]);
// console.log(twoWheeler['model']);
// console.log(twoWheeler['year']);

var cap = {
    firstName: "Steve",
    lastName:"Rogers",
    age: 102, 

    friends:['Bucky Barnes', 'Tony Stark', 'Bruce Banner'],

    isAvenger: true,

    address : {
        state: "New York",
        city : {
            name: "Brooklyn",
            pincode: 123456    
        }
    }
}

// console.log(cap);

// console.log(cap.friends[0]);
// console.log(cap.address.city);
// console.log(cap.address.city.name);
// console.log(cap.address.city.pincode);
cap.isAvenger = false;

console.log(cap.isAvenger);

cap.movies = ['first avenger', 'avengers', 'winter soldier', 'age of ultron', 'civil war', 'infinity wars', 'endgame'];

// console.log(cap);

delete cap.age;
console.log(cap);

