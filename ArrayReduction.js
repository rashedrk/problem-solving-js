/**
6.Task: Array Reduction
-----------------------------
Create An Array Of Numbers. Write A Function That Uses The Reduce Method To Calculate The Sum Of All Even Numbers In The Array.
*/

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
const evenSum = (arr) => {
    return arr.reduce((total, currentValue) => {
        if (currentValue % 2 == 0 ) {
            return currentValue + total
        }
        else {
            return total
        }
    }, 0)
};

console.log(evenSum(numbers));