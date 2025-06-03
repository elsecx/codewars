// day 7/366
// Highest and Lowest - https://www.codewars.com/kata/554b4ac871d6813a03000035

// const highAndLow = (numbers) => {
//     const numArray = numbers.split(" ").map(Number);
//     const maxNum = Math.max(...numArray);
//     const minNum = Math.min(...numArray);
//     return `${maxNum} ${minNum}`;
// };

const highAndLow = (numbers) => `${Math.max(...numbers.split(" ").map(Number))} ${Math.min(...numbers.split(" ").map(Number))}`;

console.log(highAndLow("1 2 -3 4 5"));
