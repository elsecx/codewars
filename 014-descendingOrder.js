// day 13/366
// Descending Order - https://www.codewars.com/kata/5467e4d82edf8bbf40000155

const descendingOrder = (n) => parseInt(n.toString().split('').sort().reverse().join(''), 10);

console.log(descendingOrder(42145));