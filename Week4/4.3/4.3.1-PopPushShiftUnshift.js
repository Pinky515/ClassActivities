const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let pop1 = nums.pop();
console.log(pop1);
let pop2 = nums.pop();
console.log(pop2);
// remove each of the first two items with shift(), saving each item to a variable
let shift1 = nums.shift();
let shift2 = nums.shift();
console.log (shift1, shift2);
// use push and unshift to add the variables back to the array in numerical order, 0-6
let push1 = nums.push(5, 6);
let unshift1 = nums.unshift(1);
console.log(nums);