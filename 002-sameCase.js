// Day 2/366
// Same Case - https://www.codewars.com/kata/5dd462a573ee6d0014ce715b

// const sameCase = (a, b) => {
//     const pattern = /^[a-zA-Z]+$/;
//     const upper = a === a.toUpperCase() && b === b.toUpperCase();
//     const lower = a === a.toLowerCase() && b === b.toLowerCase();

//     if (pattern.test(a) && pattern.test(b)) {
//         if (upper || lower) {
//             return 1;
//         } else {
//             return 0;
//         }
//     } else {
//         return -1;
//     }
// };

const sameCase = (a, b) => {
    const isLetter = (char) => /^[a-zA-Z]$/.test(char);

    if (!isLetter(a) || !isLetter(b)) return -1;
    return (a === a.toUpperCase()) === (b === b.toUpperCase()) ? 1 : 0;
};

console.log(sameCase("a", "g"));
