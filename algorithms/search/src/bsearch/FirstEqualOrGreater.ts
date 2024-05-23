/*
    issue: Given an array of integers sorted in increasing order and a target, 
           find the index of the first element in the array that is larger than
           or equal to the target. 
    constraints: Assume that it is guaranteed to find a satisfying number.
    input: list, target
    output: index of first equal or greater number.
    edge cases:
    ideas:
      1. convert all to true or false and find the first true.
      2. as i'm iterating ask (x) -> less loops.
    traces:
      1. [1, 2], 1
      2, [5, 6, 8, 9], 6
      3. [6, 7, 9], 9
    manual steps:
      c2.
        1. l is 0 h is 3
        2. found is empty
        3. mid is 1
        4. 6 is >= 6, update found and high
        5. l is 0 h is 0
        6. mid is 0
        7. 6 is not >= 5, update low
        8. l is 3 h is 3 mid is 3
      c1.
        1. create a range
        2. create a found as empty 
        2. pick a mid
        3. ask if target is >= picked element
          3.1 update found
          3.1 update keep looking to the right
*/

export const firstEqualOrGreater = (list: number[], target: number): number => {
  let found = -1,
    low = 0,
    high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const item = list[mid];

    if (item >= target) {
      found = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return found;
};

const assert = (actual: any, expected: any, description: string): string => {
  let message = "";

  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    message = "passed";
  } else {
    message = `FAILED expected: ${expected}, but got ${actual}`;
  }

  return message;
};

// (() => {
//   console.log(assert(firstEqualOrGreater([1, 3], 3), 1, ""));
//   console.log(assert(firstEqualOrGreater([1, 2, 3, 4], 3), 2, ""));
//   console.log(assert(firstEqualOrGreater([1, 1, 2, 3], 3), 3, ""));
//   console.log(assert(firstEqualOrGreater([3], 3), 0, ""));
// })();
