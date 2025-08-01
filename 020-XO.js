// day 20/266
// Exes and Ohs - https://www.codewars.com/kata/55908aad6620c066bc00002a

const XO = (str) => str.toLowerCase().split('').filter(c => c === 'x').length === str.toLowerCase().split('').filter(c => c === 'o').length;

console.log(XO("ooxx"));