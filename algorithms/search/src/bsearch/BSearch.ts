/*
    issue: Binary Search, searching algorithm under the realm of shrinking the data set. O(log n)
    input: array, target
    output: location of target in the list or -1 fot not found.
    constraints:
        1. provide a list
        2. provide target
        3. list is sorted
    edge cases:
        1. 
    approaches:
        1. sequential look up
        2. dictionary look up (X)
    traces:
        1. [], 1
        2. [1, 2], 2
        3. [4, 6, 9], 9
        4. [8, 9, 12, 14], 1
    manual steps:
        C1.
            1. Pick a page at random
            2. Ask if target is found
            3. If not pick a new random page

            . Pick a page -> getting the middle of the range of pages
                . beginning of the range + end of the range / 2
            . Ask
            . Repeat until target is found, or we have an invalid range.
        C4. [8, 9, 12, 14], target is 8
            1. (0 + 3) / 2 = 1.5 = 1
            2. Not it, (0 + 0) / 2 = 0
            3. found it
    pseudo steps:
        1. establish a low and a high boundary.
        2. repeat until you don't have a valid range or the element was found
        3. if not found return - 1
*/
export const binarySearch = (list: number[], target: number) => {
  if (list.length === 0) return -1;

  let low = 0,
    high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const possibleTarget = list[mid];

    if (target === possibleTarget) {
      return mid;
    } else if (target < possibleTarget) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

const assertEqual = (actual: any, expected: any, testName: string) => {
  let message = "";

  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    message = "passed";
  } else {
    message = `FAILED [${testName}] Expected "${expected}", but got "${actual}"`;
  }

  return message;
};

// (() => {
//   console.log(
//     assertEqual(binarySearch([], 2), -1, "returns -1 when empty list")
//   );
//   console.log(
//     assertEqual(
//       binarySearch([1, 3], 2),
//       -1,
//       "returns -1 when target is not found in list"
//     )
//   );
//   console.log(
//     assertEqual(
//       binarySearch([1, 3, 5, 8], 3),
//       1,
//       "returns the position where the target was found in the list"
//     )
//   );
// })();
