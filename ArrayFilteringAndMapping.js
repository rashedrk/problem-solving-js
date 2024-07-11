/*
1.Task: Array Filtering And Mapping
------------------------------------------------
Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
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

const filterAndMapping = (arr) => {
    const maleNames = arr.filter(element => element.gender !== 'female')
    const nameArray = maleNames.map(element => element.name)

    return nameArray
};

console.log(filterAndMapping(person));