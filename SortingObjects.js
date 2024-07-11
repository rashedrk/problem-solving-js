/*
4.Task: Sorting Objects
----------------------------------
Create An Array Of Objects Representing Cars With Properties Like Maker, Model, And Year. Write A Function To Sort The Array Of Cars By The Year Of Manufacture In Ascending Order. Print The Sorted Array.
*/

const cars = [
    {
        Maker: 'Tesla',
        model: 'TX203',
        year: '2020',
    },
    {
        Maker: 'BMW',
        model: 'BM203w',
        year: '2001',
    },
    {
        Maker: 'Nissan',
        model: 'NK992',
        year: '2003',
    },
    {
        Maker: 'BMW',
        model: 'XY83',
        year: '2010',
    }
];

const sortArray = (arr) => {
    const sort = arr.sort((a, b) => a.year - b.year);
    return sort
}

console.log(sortArray(cars));