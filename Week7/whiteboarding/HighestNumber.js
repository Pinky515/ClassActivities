// build a function that takes arguments and determines which is the highest number and prints it

function highestNumber(...param) {
  param.forEach(val => {
    if (val > param.length) {
      return val;
    } else {
      let new1 = val;
      param++;
      return new1;
    }
  });
}
console.log(highestNumber(1, 5, 9, 15));

// pseudocode:
// function = loop of array
// if value1 is greater than all others return value1
// otherwise rename value and continue loop with new variable

// function findHighest(...numbers){
//   // Sort the array of numbers descending (highest first)
//   let list = numbers.sort(function(a, b) {
//       return b - a;
//   });
//   // Output the first (highest value)
//   console.log(list[0]);
// }

// findHighest(0,20,-100,11111)

// function findHighest(nums) { // data type of nums is an array
//   // Iterate over the array of numbers and check if num is higher
//   console.log(nums.reduce((highest, num) => num > highest ? num : highest));
// }

// findHighest([0,20,-100,11111])
