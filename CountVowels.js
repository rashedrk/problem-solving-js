// Task: Count Vowels
// ----------------------------------
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year

const countVowels = (str) => {
    let count = 0;
    str.toLowerCase().split("").forEach(char => {
        if (char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u") {
            count++;
        }
    });

    return count;
}

console.log(countVowels("HAppy NEw Year"));
