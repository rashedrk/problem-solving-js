/**
5.Task: Find And Modify
------------------------------------
Write A Function That Searches An Array Of Objects For A Specific Person By Name. If Found, Modify Their Age Property. Print The Updated Array.
 */

const person = [
    {
        name: 'Rahim',
        age: 20,
        gender: 'male'
    },
    {
        name: 'haqim',
        age: 15,
        gender: 'male'
    },
    {
        name: 'khatun',
        age: 21,
        gender: 'female'
    },
    {
        name: 'Mita',
        age: 22,
        gender: 'female'
    },
    {
        name: 'karim',
        age: 32,
        gender: 'male'
    },
    {
        name: 'halima',
        age: 30,
        gender: 'female'
    },

];

const ageModify = (name, newAge, arr) => {
    const person = arr.find(element => element.name === name)
    person.age = newAge;

    return arr
}

console.log(ageModify('Mita', 20, person));