/*
    issue: Given an integer, find its square root without using the built-in square root function.
           Only return the integer part (truncate the decimals).
    input: a number
    output: a number representing the square root oof n.
    contraints:
        1. can't use  the built-in square root function.
        2. only return integers and not decimals.
    edge cases:
        1. when n is 1
    ideas:
        1. Even though the target is the only input, 
           we can still generate a list in ascending order to give the answer.
    traces:
        c1. 0
        c2. 1
        c3. 8
    manual steps:
        c1. low is 0, high is (0/2) -> 0
        c2. return 1
        c3. low is 0, high is Math.floor(8 / 2) -> 4
            1. highestSquared is 0
            2. while low <= high
                2.1 mid is (0 + 4) / 2 -> 2
                2.2 is 2 ** 2 <= 8
                2.3 highestSquare is 2
                2.4 low is 3, high is 4, mid is (3 + 4) / 2 -> 3
                2.5 is 3 ** 2 <= 8
                2.6 high is 3, low is 3, mid is (3 + 3) / 2 ->  3
                2.7 is 3 ** 3 <= 8
                2.8 low is 3, high is 2
            3. return higestSquared -> 2

    pseudo code
        (if 1 return 1)
        1. create a range
        2. create a record of the number squared to be less or equal to the target
        3. while low is <= high
            3.1 create a mid
            3.2 square and if its less or equal
                3.2.1 record mid as highestSquare
                3.2.2 update low to mid + 1
            3.3 update high to mid - 1
        4. return highestSquare
*/
export const squareRootEstimate = (target: number) => {
  if (target === 1) return 1;

  let low = 0,
    high = Math.floor(target / 2),
    highestSquared = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (mid ** 2 <= target) {
      highestSquared = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return highestSquared;
};

const tst = (actual: any, expected: any, description: string): string => {
  let message = "";

  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    message = "passed";
  } else {
    message = `${description} FAILED: Expected ${expected}, but got ${actual}`;
  }

  return message;
};

// (() => {
//   console.log(tst(squareRootEstimate(0), 0, "'Square root of 0 is: 0'"));
//   console.log(tst(squareRootEstimate(1), 1, "'Square root of 1 is: 1'"));
//   console.log(tst(squareRootEstimate(8), 2, "'Square root of 8 is: 2'"));
//   console.log(tst(squareRootEstimate(16), 4, "'Square root of 16 is: 4'"));
// })();
