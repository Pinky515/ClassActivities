// Logical Operators
// what do you expect each line to print?
console.log(true && false); //true false - wrong, understood 1 * 0 = 0 aka false
console.log(true || false); //true or false - wrong, understood 1 or 0 rather choose 1 aka true
console.log(!true); //false
console.log(!(true && false)); //nothing  - not false = true
console.log(false || !false); // false or not false = not false = true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); //undefined or null - same as 0 or 1, rather choose something. in this case null
console.log(!``); //true
console.log(!(1 && "false")); //opposite of true and true is false
console.log(NaN || !"true"); // - falsey or true 

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 30;

if (age > 10) {
    console.log("full menu");
} else if (age < 10) {
    console.log("kids menu");
}

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;

// Write your if statement here *

if (num == 0) {
    console.log("The number is zero");
}
