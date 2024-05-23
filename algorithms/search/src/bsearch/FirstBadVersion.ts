/* 
    issue: You are a project manager and work from an iterative approach based on the last version.
    input: up to version 5, the bad version
    output: version 4 was the first version were the code started failing.
    goal: We want to tell what was the first version where our code was failing.
    constraints:
        1. the bad version could be between version 1 and version 230
    edge cases:
        -
    ideas:
        1. Create a range from 1 up to version n, and ask (in this case look for our target).
        2. Ask sequentially.
    Traces:
        c1. 5, 2
        c2. 8, 2
    manual steps:
        c1. 1 - 5
            1. low is 1, high is 5, mid is (1 + 5) / 2 = 3
            2. is 3 bad? no, then low is mid + 1
            3. low is 4, high is 5, mid is 4
            4. record mid, high is mid - 1
            5. low is 4, high is 4, mid is 4
            6. is 4 <= than our record
            7. record and make high 4 - 1, which crosses and returns the recorder value
    pseudocode:
        1. create a range from 1 to the last version
        2. create the minimum version and start it at 1
        3. while low <= high
            3.1 create mid (low + high) / 2
            3.2 if element at mid is bad
                3.2.1 record mid as min
                3.2.2 high is mid - 1
            3.3 low is mif + 1
*/

export const firstBadVersion = (versions: number, bad: number) => {
  let low = 1,
    high = versions,
    min = versions;

  while (low <= high) {
    const version = Math.floor((low + high) / 2);

    if (version >= bad) {
      min = version;
      high = version - 1;
    } else {
      low = version + 1;
    }
  }

  return min;
};

const assert = (actual: any, expected: any, description: string) => {
  let message = "";

  if (actual === expected) message = "passed";
  else {
    message = `Failed: ${description}, Expected ${expected}, but got ${actual}`;
  }

  return message;
};

(() => {
  console.log(assert(firstBadVersion(5, 4), 4, "Expect 4"));
  console.log(assert(firstBadVersion(8, 2), 2, "Expect 2"));
})();
