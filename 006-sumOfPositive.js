// day 6/366
// Sum Of Positive - https://www.codewars.com/kata/5715eaedb436cf5606000381

const positiveSum = (arr) => arr.filter((n) => n >= 0).reduce((acc, x) => acc + x, 0);

console.log(positiveSum([1, -4, 7, 12]));
