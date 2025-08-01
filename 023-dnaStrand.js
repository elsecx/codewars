// day 23/366
// Complementary DNA - https://www.codewars.com/kata/554e4a2f232cdd87d9000038

const dnaStrand = dna => dna.split('').map(c => (c === 'A' ? 'T' : c === 'T' ? 'A' : c === 'C' ? 'G' : 'C')).join('');

console.log(dnaStrand("ATTGC"));