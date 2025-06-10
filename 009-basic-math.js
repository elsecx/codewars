// day 9/366
// Basic Math (Add or Subtract) - https://www.codewars.com/kata/5809b62808ad92e31b000031

const calculate = (str) => {
    if (!str || typeof str !== 'string') return "0";
    const sanitized = str
        .replace(/plus/g, '+')
        .replace(/minus/g, '-')
        .replace(/[+-]$/, '');
    try {
        return eval(sanitized).toString();
    } catch (e) {
        return "0";
    }
};


console.log(calculate("1plus2plus3plus4"));
