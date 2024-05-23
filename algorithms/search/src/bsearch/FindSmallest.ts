/*
    issue: A sorted array of unique integers was rotated at an unknown pivot. 
           For example, [10, 20, 30, 40, 50] becomes [30, 40, 50, 10, 20]. 
           Find the index of the minimum element in this array.
    input:[30, 40, 50, 10, 20]
    output: 3
    constraints:
    edge cases:
    traces:
    manual steps:
        c1. [30, 40, 50, 10, 20]

            low is 0 high is 4 mid is 2, min is 30
            is 50 < 30, no, low is 3
            low is 3, high is 4, mid is 3
            is 10 < 30, yes, min is 10, low  is 4
            low is 4, high is 4, mid is 4
            is 20 no
            return 3

        c2. [3, 5, 7, 11, 13, 17, 19, 2]

            low is 0, high is 7, mid is 3, min is 3
            is 11 < 3, no, low is 4, high is 7, mid is 5
            is 17 < 3, no, low is 6, high is 7, mid is 6
            is 19 < 3, no, low is 7, high is 7, mid is 7
            is 2 < 3, yes, min is 7, cross over
            return min
    pseudocode:
        1. create a range and establish 0 as minIdx
        2. while there is a valid range
            2.1 create mid, item, min
            2.2 if item < min
                2.2.1 record minIdx
                2.2.2 update high to mid - 1
            2.3 else update low to mid + 1
        3. return minIdx
*/

export const findSmallest = (list: number[]) => {
  let low = 0,
    high = list.length - 1,
    minIdx = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2),
      item = list[mid];

    if (item <= list[list.length - 1]) {
      minIdx = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return minIdx;
};

export const findSmallest2 = (arr: number[]) => {
  let low = 0,
    high = arr.length - 1,
    maxIdx = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const item = arr[mid];
    const max = arr[maxIdx];

    if (item > arr[mid + 1]) {
      maxIdx = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return maxIdx;
};
