// bracket and dot notation
const key = "1";
const obj = {
  key: "the key is 'key'",
  1: "the key is 1",
};

// what will the following lines print?
console.log(obj[key]); // "1" i understand now the key="1"="the key is 1"
console.log(obj.key); // "the key is 'key'"
console.log(obj["key"]); // "the key is 'key'"

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const Randall = {
    breed: ["Miniture Schnauzer", "Pitbull Terrior",],
    age: 5,
    cat: false,
    collection: [1, 30, 5, 32]
};

// Access a value in the "collection" property
const collectionValue = Randall.collection[2];
console.log(collectionValue);
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
    method: function learningMethods () {
        console.log(`I am learning how to create and read methods!`)
    }
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Coyote Ugly",
  number: 30,
  color: "orange"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print? 5
// what do you expect to see on each line? 
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}

// const keys = ["key", "1", "method", "favorites", "list"];
// Key is the key and the value is: 



// Use a template literal to print a sentence about your favorite things
// obj["favorites"] = {
//     movie: "Coyote Ugly",
//     number: 30,
//     color: "orange"
//   };

console.log(`Pinky is ${obj.favorites.number} year old woman whose favorite color is ${obj.favorites.color} and her favorite movie is ${obj.favorites.movie}.`)
// Access the values "b", 4, and 6 from obj.list

// obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];
console.log(obj.list[1]);
console.log(obj.list[4][1]);
console.log(obj.list[5].f);
