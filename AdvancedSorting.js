// 11. Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties
// Write a function to sort the students by average grade in descending order.

const students = [
    { name: "Jack", grade: 3.22 },
    { name: "Ibrahim", grade: 3.37 },
    { name: "Iqbal", grade: 3.78 },
    { name: "Kasem", grade: 3.54 },
]

const sortStudent = (arr) => {
    return arr.sort((a, b) => b.grade - a.grade)
}



console.log(sortStudent(students));