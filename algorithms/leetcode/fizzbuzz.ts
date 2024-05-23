import { assert } from "./test";

/*
    issue: iterates over a range of numbers from 0 and decides wether to say "Fizz" or "Buzz"
    input: number
    output: says "Fizz" or "Buzz"
    constraints:
    ideas:
    Traces:
    Pseudo code:
    Optimize:
    Real code:
*/

/*
    issue: given a number we return list of the numbers and "Fizz", "Buzz" or "FizzBuzz"
    input: number
    output: list of the numbers and "Fizz", "Buzz" or "FizzBuzz" for thiose who passed our logic
    constraints:
        - when i % 3 === 0 and i % 5 === 0 -> "FizzBuzz"
        - when i % 3 === 0 -> "Fizz"
        - when i % 5 === 0 -> "Buzz"
        - else "i"
    ideas:
        - iterate 1, 2, fizz, 3, 4, "buzz", 
    Traces:
        - n = 3
        - ["1", "2", "Fizz"]
    Pseudo code:
    Optimize:
    Real code:
*/

function fizzBuzz(n: number): string[] {
  let values: string[] = [];

  for (let i = 1; i <= n; i++) {
    const isDivisibleBy3 = i % 3 === 0;
    const isDivisibleBy5 = i % 5 === 0;
    const fizzBuzz = isDivisibleBy3 && isDivisibleBy5;

    if (fizzBuzz) {
      values.push("FizzBuzz");
    } else if (isDivisibleBy3) {
      values.push("Fizz");
    } else if (isDivisibleBy5) {
      values.push("Buzz");
    } else {
      values.push(String(i));
    }
  }

  return values;
}

console.log(assert(["1", "2", "Fizz", "4", "Buzz"], fizzBuzz(5), "FizzBuzz"));
