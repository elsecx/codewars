// day 18/366
// Mumbling - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

const accum = (s) => s.split('').map((c, i) => c.toUpperCase() + c.toLowerCase().repeat(i)).join('-');

console.log(accum("abcd"));