/*
3.Task: Function Composition
--------------------------------------
Write Three Functions: One To Square A Number, One To Double A Number, And One To Add 5 To A Number. Compose These Functions To Create A New Function That Squares A Number, Doubles The Result, And Then Adds 5.
*/

const square = (num) => num * num;
const double = (num) => num * 2;
const add5 = (num) => num + 5;

const doAll = (num) => add5(double(square(num)));

console.log(doAll(10));