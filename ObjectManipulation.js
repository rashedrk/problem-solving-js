/*
2.Task: Object Manipulation
--------------------------------------------
Create An Array Of Objects Representing Books With Properties Like Title, Author, And Year. Write A Function That Takes The Array And Returns A New Array With Only The Book Titles. Print The Result.
*/

const books = [
    {
        title: 'How to talk to anyone',
        author: 'Leil Lowndes',
        year: 1999
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        year: 2002
    },
    {
        title: 'Himu',
        author: 'Humayan Ahmed',
        year: 2004
    },
];

const bookNameGenerator = (arr) => {
    return arr.map(element => element.title)
};

console.log(bookNameGenerator(books));