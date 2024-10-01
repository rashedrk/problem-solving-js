// 9. Task: Unique Values
// ----------------------------------
// Create an array of numbers with some duplicate values. Write a function to filter
// out the duplicate values and return a new array with only unique numbers. 
// Print the result.

const numbers = [1, 2, 5, 10, 2, 10, 5, 9, 1, 5];

const uniqueValues = (arr) => {
    const unique = arr.filter((value, index) => arr.indexOf(value) === index);
    return unique;
}

console.log(uniqueValues(numbers));
