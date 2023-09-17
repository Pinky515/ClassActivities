const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
let a = "a";
let b = "b";
let c = "c";
let indexOfA = arr.indexOf(a);
console.log(indexOfA);
let indexOfB = arr.indexOf(b);
console.log(indexOfB);
let indexOfC = arr.indexOf(c);
console.log(indexOfC);

// find the last index of "a", "b", and "c"
let lastIndexOfA = arr.lastIndexOf(a);
console.log(lastIndexOfA);
let lastIndexOfB = arr.lastIndexOf(b);
console.log(lastIndexOfB);
let lastIndexOfC = arr.lastIndexOf(c);
console.log(lastIndexOfC);

// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"