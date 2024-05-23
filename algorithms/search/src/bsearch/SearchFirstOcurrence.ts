/*
    issue: Given a sorted array of integers and a target integer, 
           find the first occurrence of the target and return its index. 
           Return -1 if the target is not in the array.
    input: list, target
    output: index or -1
    constraints:
        1. sorted array
    edge cases:
        1. list can be empty
    ideas:
        1. convert all true or false
        2. ask while iterating in dictinary approach
    traces:
        c1. list: [1, 3, 3, 3, 3, 6, 10, 10, 10, 100] target: 3
        c2. list: [2, 3, 5, 7, 11, 13, 17, 19] target: 11
    manual:
        c1.
            1. low is 0, high is 9, occurence is 0
            2. mid is 4
            3. is 3 === target
                3.1 update ocurrence
                3.2 update high to mid -1
            4. low is 0 high is 3, mid is 1
            5. is 3 === target
                5.1 update ocurrence
                5.2 update high to mid - 1
            6. low is 0 high is 0, mid is 0
            7. is 1 === target
            8. is 1 > target
            9. is 1 < target
                9.1 update low to mid + 1
        c2. list: [2, 3, 5, 7, 11, 13, 17, 19] target: 6
            1. low is 0, high is 7, ocurrence is 0 mid is 3
            2. is 7 === target
            4. else is 7 > target
                4.1 update high to mid - 1
            5. low is 0, high is 2, mid is 1
            6. is 3 === target
            7. is 3 > target
            8. is 3 < target
                8.1 update low to mid + 1
            9. low is 2, high is 2, mid is 2
            10. is 5 === target
            11. is 5 > target
            12. is 5 < target
            return 0
    pseudo code:
        c1. 
            1. create range and ocurrence at 0
            2. while low is <= high
                2.1 create a new mid
                2.2 ask if element at mid is = to target
                    2.2.1 update ocurrence to mid
                    2.2.2 high to mid - 1
                2.3 if not ask if el > target
                    2.3.1 update high to mid - 1
                2.4 if not update low to mid + 1
            3. return ocurrence
 */

export const firstOcurrence = (list: number[], target: number) => {
  let low = 0,
    high = list.length - 1,
    ocurrence = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const el = list[mid];

    if (el === target) {
      ocurrence = mid;
      high = mid - 1;
    } else if (el > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ocurrence;
};

const test = (expected: any, actual: any, description: string): string => {
  let message = "";

  if (JSON.stringify(expected) === JSON.stringify(actual)) {
    message = "passed";
  } else {
    message = `FAILED: expected ${expected}, but got ${actual}`;
  }

  return message;
};

// (() => {
//   console.log(test(firstOcurrence([2, 3, 5, 7, 11, 13, 17, 19], 11), 4, ""));
//   console.log(
//     test(firstOcurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3), 1, "")
//   );
//   //   console.log(test(firstOcurrence([], 3), 2, ""));
//   //   console.log(test(firstOcurrence([], 3), 2, ""));
// })();
