/*
    issue: Obtsin the firdt and last ocurrences of an element in a list;
    input: list, target
    output: [-1, - 1]
    goal:
    constraints:
    edge cases:
        - not present
    ideas:
        1. perform two separate binary searches to obtain the start and end of a target. X
        2. perform binary search and a nested for loop there after to obtain start and end.
    traces:
     1 [5,7,7,8,8,10], 8 [3,4]
    manual steps:
    pseudocode:
*/

const ocurrences = (list: number[], target: number) => {
  let low = 0,
    high = list.length - 1,
    start = -1,
    end = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (list[mid] === target) {
      start = mid;
      high = mid - 1;
    } else if (list[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  (low = 0), (high = list.length - 1);

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (list[mid] === target) {
      end = mid;
      low = mid + 1;
    } else if (list[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return [start, end];
};

console.log(ocurrences([5, 7, 7, 8, 8, 10], 8));
console.log(ocurrences([5, 7, 7, 8, 8, 10], 6));
