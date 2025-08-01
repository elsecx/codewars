// day 24/366
// Credit Card Mask - https://www.codewars.com/kata/5412509bd436bd33920011bc

const maskify = str => str.slice(-4).padStart(str.length, '#');

console.log(maskify("4556364607935616"));