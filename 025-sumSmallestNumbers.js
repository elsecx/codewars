// day 25/366
// Sum of two lowest positive integers - https://www.codewars.com/kata/558fc85d8fd1938afb000014

const sumTwoSmallestNumbers = numbers => numbers.sort((a, b) => a - b)[0] + numbers[1];

console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));