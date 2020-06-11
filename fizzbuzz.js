'use strict';
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your number? ", function(number) {
  console.log(fizzbuzz(number));
  rl.close();
});

var fizzbuzz = function(num) {
  if (num % 15 === 0) {
      return 'FizzBuzz';
    } else if (num % 3 === 0) {
      return 'Fizz';
    } else if (num % 5 === 0) {
      return 'Buzz';
    } else {
      return num;
    }
};

module.exports = fizzbuzz;
