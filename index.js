/* 
Let's deep into arrays
Methods
 1. foeach
 2. map
 3. filter
 4. reduce
 5. some
 6. every
 7. find
 8. find index
 9. sort
 */

const { log } = console;

// forEach
// Loop through each item on the array
log(`-------------- array.foreach example --------------`);
["1st", "2nd", "3rd"].forEach((item, index) => {
  log(`item: ${item} with index ${index}`);
});

// map -> Takes the item of the array makes something with each item and return a new array
log(`\n -------------- array.map example --------------`);
const doubled = [1, 2, 3].map(item => {
  return item * 2;
});
log(`doubled: ${doubled}`);

// filter -> Check each item with a specific condition if it's true let the item if don't is removed
log(`\n -------------- array.filter example --------------`);
const evens = [1, 2, 3].filter(item => {
  return item % 2 === 0;
});

log(`evens: ${evens}`);

// reduce -> Take an array do something and then pass the result to the next iteration along with the next item
log(`\n -------------- array.reduce example --------------`);
const result = [1, 2, 3].reduce((result, item) => {
  return result + item;
}, 0); // This number at the end is the initial result is going to be, if you don't set it the initial result value is the first item of the array

log(`sum is: ${result}`);

// some -> does any item in the entire array meets the condition
log(`\n -------------- array.some example --------------`);
const hasNegativeNumbers = [1, 2, 3, -1, 4, 5].some(item => {
  return item < 0;
});
log(`hasNegativeNumbers: ${hasNegativeNumbers}`);

// every -> it's like some but every number must meets the condition
log(`\n -------------- array.every example --------------`);
const allPositiveNumbers = [1, 2, 3, -4].every(item => {
  return item > 0;
});
log(`allPositiveNumbers: ${allPositiveNumbers}`);

// find -> goes through every item and checks it against the condition and if it's true returns the item
log(`\n -------------- array.find example --------------`);
const objFound = [{ id: "a" }, { id: "b" }, { id: "c" }].find(
  item => item.id === "a" // Implicit return, but only if there is no block, the previous ones also apply
);
log(`Item found: ${JSON.stringify(objFound)}`);

// find index -> return the index of the item, if doesn't find it then return -1
log(`\n -------------- array.findIndex example --------------`);
const foundIndex = [{ id: "a" }, { id: "b" }, { id: "c" }].findIndex(item => {
  return item.id === "c";
});

log(`Index: ${foundIndex}`);

// sort
log(`\n -------------- array.sort example --------------`);

const sortedArrayASC = [1, 6, 5, 0, 3, 9, 8, 33, 22, 55, 66, 988, 77].sort(
  (a, b) => a - b
);
const sortedArrayDESC = [1, 6, 5, 0, 3, 9, 8, 33, 22, 55, 66, 988, 77].sort(
  (a, b) => b - a
);

log(`Sorted Array ASC: ${sortedArrayASC}`);
log(`Sorted Array DESC: ${sortedArrayDESC}`);
