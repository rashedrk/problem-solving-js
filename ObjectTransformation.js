// 14. Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. 
// Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.

const customers = [
    { name: 'Karim', purchases: 3, loyaltyPoints: 100 },
    { name: 'Rahim', purchases: 6, loyaltyPoints: 150 },
    { name: 'Jabbar', purchases: 8, loyaltyPoints: 200 },
    { name: 'Elyas', purchases: 2, loyaltyPoints: 50 }
];

const transformCustomers = (customers) => {
    return customers.map(customer => {
        if (customer.purchases > 5) {
            return {
                ...customer,
                loyaltyPoints: customer.loyaltyPoints * 2
            };
        }
        return customer;
    });
};

console.log(transformCustomers(customers));