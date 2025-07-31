// day 13/366
// Don't Give Me Five! - https://www.codewars.com/kata/5813d19765d81c592200001a

const dontGiveMeFive = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => i + start).filter(n => !n.toString().includes('5')).length;


console.log(dontGiveMeFive(4, 17));