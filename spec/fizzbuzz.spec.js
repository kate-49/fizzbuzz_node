'use strict';

var fizzbuzz = require('../models/fizzbuzz');

describe('FizzBuzz', function() {
  it('should return Fizz for multiples of 3', function() {
    expect(fizzbuzz(3)).toEqual('Fizz');
    expect(fizzbuzz(6)).toEqual('Fizz');
  });

  it('should return Buzz for multiples of 5', function() {
    expect(fizzbuzz(5)).toEqual('Buzz');
    expect(fizzbuzz(10)).toEqual('Buzz');
  });

  it('should return FizzBuzz for numbers which are multiple of both factors', function() {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
    expect(fizzbuzz(75)).toEqual('FizzBuzz');
  });

  it('should return the number itself when not a multiple of these factors', function() {
    expect(fizzbuzz(2)).toEqual(2);
    expect(fizzbuzz(14)).toEqual(14);
  });
});
