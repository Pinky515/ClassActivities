// create an Array using an Array literal
let dogs = ["Randall", "Eartha", "Tyra", "Basko"];
// access the 1st item in the Array
const mainDog = dogs[0];
// access the last item in the Array
const leastLiked = dogs[3];
// print the length of the Array
console.log(dogs.length);
// use the length property to access the last item in the Array
const lastOnTheLength = dogs[dogs.length - 1];
// with for...of, loop over the Array, modify the value and add to a different Array
const familyMembers = ["Tichinia", "Keona"]
for (let member of dogs) {
    familyMembers.push(member + ", the dog");
}
console.log(familyMembers);