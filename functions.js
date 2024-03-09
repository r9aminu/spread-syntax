// Calculate the sum of three numbers
function sum(a, b, c) {
    return a + b + c; // sum an array of numbers
}
const numbers = [1,2,3];
console.log(sum(...numbers));

// Merging two arrays using spread operator
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2]; // Combines elements of array1 and array2
console.log(mergedArray);

// Inserting elements into an array with spread operator
const colors = ['red', 'green', 'blue'];
const extendedColors = ['yellow', ...colors, 'purple']; // Adds 'yellow' and 'purple' to colors array
console.log(extendedColors);

// cloning and modifying
const person = { name: 'John', age: 30 };
const newPerson = { ...person, name: 'Jane', gender: 'female' };
console.log(person);
console.log(newPerson);

// Combining properties of two objects using spread operator
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const combinedObject = { ...object1, ...object2 }; // Merges properties of object1 and object2
console.log(combinedObject);
