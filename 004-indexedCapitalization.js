// day 4/366
// Indexed Capitalization - https://www.codewars.com/kata/59cfc09a86a6fdf6df0000f1

// const capitalize = (str, arr) => {
//     const chars = [...str];

//     arr.forEach((index) => {
//         if (index >= 0 && index < chars.length) {
//             chars[index] = chars[index].toUpperCase();
//         }
//     });

//     return chars.join("");
// };

const capitalize = (str, arr) => [...str].map((char, idx) => (arr.includes(idx) ? char.toUpperCase() : char)).join("");

console.log(capitalize("abcdef", [1, 2, 5, 100]));
