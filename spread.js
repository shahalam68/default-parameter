const numbers = [ 23, 65, 99, 21, 34,];
// console.log(numbers);
// console.log(...numbers);



const max = Math.max(23, 65, 99);
const maxInArray = Math.max(...numbers);
console.log(max, maxInArray);
// numbers.push(55);



const number2 = numbers;
numbers.push(55);
console.log(numbers);