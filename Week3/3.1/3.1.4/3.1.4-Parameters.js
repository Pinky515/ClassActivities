// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together

function weLoveDogs (dogName1 = 5, dogName2 = 0.8) {
    console.log(dogName1, dogName2);
    return dogName1 + dogName2;
}
// invoke the function and pass in two numbers

weLoveDogs(8, 80);
// invoke the function and pass in more than two numbers
weLoveDogs(8, 80, 88);
// invoke the function and pass in only one number
weLoveDogs (12);
// change the function to set default values for the parameters
// again, invoke the function and pass in only one number
weLoveDogs (17)
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator

function weLoveDogsRP (dogName1, dogName2, ...dogName3) {
    console.log(dogName1, dogName2, dogName3);
    return dogName1 + dogName2 + dogName3;
}
// again, invoke the function and pass in more than two numbers
weLoveDogsRP (1, 2, 3, 4, 5);
console.log("Printed weLoveDogsRP function");
console.log (weLoveDogs(1, 2, 3, 4, 5));
let weLoveDogsRPVariable = weLoveDogsRP(1, 2, 3, 4, 5);

console.log("Printed weLoveDogsRP variable");
console.log(weLoveDogsRPVariable);