// day 10/366
// Square Every Digit - https://www.codewars.com/kata/546e2562b03326a88e000020

const squareDigits = (num) => parseInt(num.toString().split('').map(digit => Math.pow(parseInt(digit), 2)).join(''));

console.log(squareDigits(9119));