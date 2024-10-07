// Task: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array
// of objects with a 'quantity' and 'price' property.
const items = [
    { quantity: 2, price: 10 },
    { quantity: 1, price: 15 },
    { quantity: 4, price: 7 },
    { quantity: 3, price: 12 }
];

const calculateTotal = (items) => {
    return items.reduce((total, item) => {
        return total + item.quantity * item.price;
    }, 0);
};

console.log(calculateTotal(items));
