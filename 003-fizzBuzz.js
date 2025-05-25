// day 3/366
// Fizz Buzz - https://www.codewars.com/kata/5300901726d12b80e8000498

const fizzbuzz = (n) =>
    Array.from({ length: n }, (_, i) =>
        ++i % 15 === 0 ? "FizzBuzz" : i % 3 === 0 ? "Fizz" : i % 5 === 0 ? "Buzz" : i
    );

console.log(fizzbuzz(3));
