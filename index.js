"use strict";
//JavaScript code and concept to solve basic problems
// 1. Personal Messagee
let personName = "Anna";
console.log(`Hello ${personName}, would you like to learn some Python today?`);
// 2. Name Cases
let personName1 = "John Doe";
console.log(personName1.toLowerCase());
console.log(personName1.toUpperCase());
let titleCaseName = personName.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
console.log(titleCaseName);
// 3. Famous Quote
let quote = "A person who never made a mistake never tried anything new.";
let author = "Albert Einstein";
console.log(`${author} once said, "${quote}"`);
// 4. Famous Quote 2
let famous_person = "Albert Einstein";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);
// 5. Stripping Names
let personName2 = "\t\n Albert Einstein \t\n";
console.log(personName2);
console.log(personName2.trim());
// 6. Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
// 7. Favorite Number
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}.`);
//8. add comments 
// 9. Names
let names = ["Ann", "Pam", "Man"];
names.forEach(name => console.log(name));
// 10. Greetings
let greetings = "Hello, ";
names.forEach(name => console.log(`${greetings}${name}!`));
// 11. Your Own Array
let vehicles = ["car", "motorcycle", "bicycle"];
vehicles.forEach(vehicle => console.log(`I would like to own a ${vehicle}.`));
// 12. Guest List
let dinnerGuests = ["Ann", "Pam", "Lisa"];
dinnerGuests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
// 13. Changing Guest List
console.log(`${dinnerGuests.pop()} can't make it.`);
dinnerGuests.push("Paul");
dinnerGuests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
// 14. More Guests
console.log("Good news! We found a bigger dinner table.");
dinnerGuests.unshift("Nelson");
dinnerGuests.splice(Math.ceil(dinnerGuests.length / 2), 0, "Lisaa");
dinnerGuests.push("Shawn");
dinnerGuests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));
// 15. Shrinking Guest List
console.log("Sorry, we can only invite two guests for dinner.");
while (dinnerGuests.length > 2) {
    console.log(`Sorry, ${dinnerGuests.pop()}, we can't invite you to dinner.`);
}
dinnerGuests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));
dinnerGuests = [];
console.log(dinnerGuests);
let placesToVisit = ["France", "Greece", "Australia", "Istanbul", "UK"];
console.log(placesToVisit);
console.log("In alphabetical order:");
console.log([...placesToVisit].sort());
console.log("Original order:");
console.log(placesToVisit);
console.log("In reverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
console.log("Original order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Reversed order:");
console.log(placesToVisit);
placesToVisit.reverse();
console.log("Original order again:");
console.log(placesToVisit);
console.log("Sorted in alphabetical order:");
console.log(placesToVisit.sort());
console.log("Sorted in reverse alphabetical order:");
console.log(placesToVisit.sort().reverse());
// 17. Dinner Guests number
console.log(`We are inviting ${dinnerGuests.length} people to dinner.`);
// 18. Array
let mountains = ["Everest", "K2", "KK"];
console.log(mountains);
// 19. TypeScript Object
let favoriteThings = {
    mountains: ["Everest", "K2", "KK"],
    rivers: ["Congo", "Amazon", "Indus"],
    languages: ["JavaScript", "Python", "TypeScript"]
};
console.log(favoriteThings);
let numbers = [1, 2, 3];
console.log(numbers[3]); // Produces an index error as array is of size 3 i.e. 0-2
// 21. Conditional Tests - true  false
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
// 22. More Conditional Tests
// Tests for equality and inequality with strings
console.log("apple" == "apple");
// Tests using the lower case function
console.log("apple".toLowerCase() == "APPLE".toLowerCase());
// Numerical tests using =, <,>
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 3);
// Tests using "and" and "or" operators
console.log(true && true);
console.log(true || false);
// Test whether an item is in an array
let fruits = ["apple", "banana", "orange"];
console.log(fruits.includes("banana"));
// Test whether an item is not in an array
console.log(!fruits.includes("pineapple"));
// 23. Alien Colors #1
let alien_color1 = "green";
if (alien_color1 === "green") {
    console.log("You earned 5 points!");
}
// 24. Alien Colors #2
let alien_color2 = "red";
if (alien_color2 === "green") {
    console.log("You earned 5 points!");
}
else {
    console.log("You earned 10 points!");
}
// 25. Alien Colors #3
let alien_color3 = "yellow";
if (alien_color3 === "green") {
    console.log("You earned 5 points!");
}
else if (alien_color3 === "yellow") {
    console.log("You earned 10 points!");
}
else if (alien_color3 === "red") {
    console.log("You earned 15 points!");
}
// 26. Stages of Life
let age = 25;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age < 4) {
    console.log("The person is a toddler.");
}
else if (age < 13) {
    console.log("The person is a kid.");
}
else if (age < 20) {
    console.log("The person is a teenager.");
}
else if (age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// 27. Favorite Fruit
let favorite_fruits = ["banana", "apple", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}
if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}
if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}
// 28. Hello Admin
let usernames = ["admin", "Alice", "Bob", "Carl", "charlie"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});
// 29. No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
// 30. Checking Usernames
let current_users = ["Alice", "Bob", "Charlie", "Carl", "admin"];
let new_users = ["Charlie", "Eva", "Frank", "George", "Hannah"];
new_users.forEach(new_user => {
    let ifexists = current_users.some(current_user => current_user.toLowerCase() === new_user.toLowerCase());
    if (ifexists) {
        console.log(`${new_user} will need to enter a new username.`);
    }
    else {
        console.log(`${new_user} is available.`);
    }
});
// 31. Ordinal Numbers
let Onumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
Onumbers.forEach(number => {
    if (number === 1) {
        console.log(`${number}st`);
    }
    else if (number === 2) {
        console.log(`${number}nd`);
    }
    else if (number === 3) {
        console.log(`${number}rd`);
    }
    else {
        console.log(`${number}th`);
    }
});
// 32. Pizzas
let pizzas = ["Pepperoni", "tikka", "bbq"];
pizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
console.log("I really love pizza!");
// 33. Animals
let animals = ["dog", "cat", "rabbit"];
animals.forEach(animal => console.log(`A ${animal} would make a great pet.`));
console.log("Any of these animals would make a great pet!");
// 34. T-Shirt
function make_shirt(size, message) {
    console.log(`The shirt size is ${size} and the message is: "${message}".`);
}
make_shirt("large", "Hello World TypeScript");
make_shirt("medium", "Hello World TypeScript");
make_shirt("small", "Hello World JavaScript");
// 35. Large Shirts
function make_shirt1(size = "large", message = "I love TypeScript") {
    console.log(`The shirt size is ${size} and the message is: "${message}".`);
}
make_shirt1();
make_shirt1("medium");
make_shirt("small", "I love JavaScript");
// 36. Cities
function describe_city(city, country = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Berlin", "Germany");
// 37. City Names
function city_country(city, country) {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// 38. Album
function make_album(artist, title, tracks) {
    let album = {
        artist: artist,
        title: title,
    };
    if (tracks != null) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums with different information
let album1 = make_album("Ed Sheeran", "Divide", 12);
let album2 = make_album("Taylor Swift", "1989");
let album3 = make_album("Imagine Dragons", "Night Visions", 14);
console.log(album1);
console.log(album2);
console.log(album3);
console.log(make_album("Taylor Swift", "Fearless", 16));
console.log(make_album("Ed Sheeran", "Divide"));
console.log(make_album("Adele", "21"));
// 39. Magicians
function show_magicians(magicians) {
    magicians.forEach(magician => console.log(magician));
}
let magicians = ["Harry Houdini", "David Blaine", "Penn Jillette"];
show_magicians(magicians);
// 40. Great Magicians
function make_great1(magicians) {
    return magicians.map(magician => `the Great ${magician}`);
}
let great_magicians1 = make_great(magicians);
show_magicians(great_magicians1);
// 41. Unchanged Magicians
function make_great(magicians) {
    return magicians.map((magician) => `the Great ${magician}`);
}
let great_magicians = make_great([...magicians]);
show_magicians(great_magicians);
show_magicians(magicians);
// 42. Sandwiches
function make_sandwich(...items) {
    console.log("Sandwich order:");
    items.forEach(item => console.log(item));
}
make_sandwich("bread", "cheese", "tomato");
make_sandwich("bacon", "lettuce", "mayo");
make_sandwich("turkey", "swiss", "mustard", "pickles");
// 43. Cars
function car_info(manufacturer, model, ...options) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    options.forEach(option => {
        let parts = option.split(":");
        car[parts[0]] = parts[1];
    });
    return car;
}
let myCar = car_info("Toyota", "Camry", "color:red", "year:2020", "features:GPS");
console.log(myCar);
