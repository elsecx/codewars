// day 12/366
// Greed - https://www.codewars.com/kata/54cefc8c975ca613d4000d7f

const getQuotes = (str) => str.match(/"[^"]*"/g) || [];

console.log(getQuotes('"example quote #1" some text "example quote #2"'));