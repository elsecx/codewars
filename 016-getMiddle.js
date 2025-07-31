// day 16/366
// Get The Middle Character - https://www.codewars.com/kata/56747fd5cb988479af000028

const getMiddle = (s) => s.length % 2 ? s.charAt(Math.floor(s.length / 2)) : s.slice(s.length / 2 - 1, s.length / 2 + 1);

console.log(getMiddle("testing"));