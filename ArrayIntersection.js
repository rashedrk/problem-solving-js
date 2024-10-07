// 13. Task: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the 
// elements that appear in both arrays.

const item1 = [1, 2, 3, 4, 5];
const item2 = [4, 5, 6, 7, 8];

const arrayIntersection = (arr1, arr2) => {
    return arr1.filter(element => arr2.includes(element));
};

console.log(arrayIntersection(item1, item2));

