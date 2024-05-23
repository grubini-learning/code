import { assert } from "./test";

/*
    issue: 
    input: m x n accounts grid 
        - [m as row] represents the customers
        - [n as column] represents the banks
    output: the richest man's net worth across all of his/hers banks
    constraints: 
        - m >= 1, n <= 50
        - a <= accounts[i][j] <= 100
    edge cases:
    ideas:
        - cycle through every row adding the amount on each bank
    Traces:
        - [[7, 1, 3], [2, 8, 7], [1, 9, 5]]
            - 11 is 11 > 0, max = 11
            - 17 is 17 > 11, max = 17
            - 15 is 15 > 17, max = 17
    pseudo:
        - declare that my max is 0
        - grab each customer's totals (row) and add them
        - compare with my existing max and update if needed
        - tell me the net worth
*/

export const richestMan = (portfolio: number[][]) => {
  let max = 0;

  portfolio.forEach((customer) => {
    const netWorth = customer.reduce((total, current) => total + current, 0);
    max = Math.max(max, netWorth);
  });

  return max;
};

console.log(
  assert(
    17,
    richestMan([
      [7, 1, 3],
      [2, 8, 7],
      [1, 9, 5],
    ]),
    "Richest Man"
  )
);
