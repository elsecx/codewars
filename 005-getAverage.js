// day 5/366
// Get the mean of an array - https://www.codewars.com/kata/563e320cee5dddcf77000158

const getAverage = (marks) => Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);

console.log(getAverage([1, 5, 87, 45, 8, 8]));
