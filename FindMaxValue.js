// Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.


const numbers = [1, 2, 5, 10, 2, 15, 55, 39, 11, 25];

const maxValue = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(maxValue(numbers));
