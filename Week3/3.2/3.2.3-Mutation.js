let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = null;
y = false;
z = undefined;
// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

let a = "name"; //formerly const
let b = []; //formerly const
let c = {}; //formerly const
// try to reassign a, b, and c to FALSY values
a = 0;
b = false;
// c = null;
// using BRACKET NOTATION, assign a value to b
b[1];
console.log(b);
// using DOT NOTATION, assign a PROPERTY to c
c.name = "theNameOfC";
// using DOT NOTATION, assign a METHOD to c
c.addSomething = () => {
  return c.name + " be doing stuff.";
};
// using BRACKET NOTATION, call the method in c
console.log(c["addSomething"]());
// print a, b, and c
console.log(a, b, c);
