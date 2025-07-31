const squareDigits = (num) => parseInt(num.toString().split('').map(digit => Math.pow(parseInt(digit), 2)).join(''));

console.log(squareDigits(9119));