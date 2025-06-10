// day 8/366
// Disemvowel Trolls - https://www.codewars.com/kata/52fba66badcd10859f00097e

const disemvowel = (str) => str.replace(/[aeiou]/gi, '');

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));