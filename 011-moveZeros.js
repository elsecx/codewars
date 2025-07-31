// day 10/366
// Move Zeros - https://www.codewars.com/kata/55c098aa8468f3b9030000f1

const move_zeros = (arrNum, isRight = true) => {
    const zeros = arrNum.filter(num => num === 0);
    const nonZeros = arrNum.filter(num => num !== 0);

    return isRight ? [...nonZeros, ...zeros] : [...zeros, ...nonZeros];
};

console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false));