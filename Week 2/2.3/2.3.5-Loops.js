// Follow the steps below to create a **while** loop that TOTALS the numbers from 1 to 100

// 1) create a variable to represent the current number
let x = 0;
// 2) create a variable to represent the current total
let currentTotal = 0
 //3) write a while loop that sums the numbers from 1 to 100
while (x <= 100) {
    currentTotal = x + currentTotal;
   console.log (currentTotal);
    x++;
};

console.log("Break");

currentTotal = 0;

// Now using the same variables you created in steps 1 and 2, create a **for** loops that TOTALS the numbers from 1 to 100

//console.log (currentTotal);
// 1) write a for loop that sums the numbers from 1 to 100

for (x = 1; x < 101; x++) {
    currentTotal = x + currentTotal;

}
console.log(currentTotal);