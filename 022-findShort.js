// day 21/366
// Shortest Word - https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

const findShort = str => Math.min(...str.split(' ').map(word => word.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));