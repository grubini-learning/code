/*
    issue: Koko doesn't know how many bananas to eat per hour to eat all of 
           the banana piles when the guard are gone.
    input: Banana piles [4, 3, 9, 23], and the number of hours guards leave.
    output: k, The number of bananas Koko eats per hour, to eat all the piles.
    goal: Get the number of bananas were KoKo doesn't have to stop eating 
          in the time that takes the guard to come back.
    constraints:
    edge cases:
    ideas:
        1. create a range from 1 to the max number of bananas. 
           Pick an amount at random and accumulate the number of hours to determine 
           if they are less or not to he hours the guards leave. This will determine feasibility.
    traces:
    manual steps:
    pseudocode:

        1. feasible get piles, k at random, and hours guard are away
        2. create an accumulator
        3. for every pile add Math.ceil(p/k)
        4. is the number less than hours guards are away

        1. create a range from 1 to Max number of bananas in a pile
        2. lastFeasibileIndex = 1
        3. while low <= high
            3.1 create mid
            3.2 if its feasible at mid
                3.2.1 high is mid - 1
            3.3 low is mid + 1
*/

const feasible = (
  piles: number[],
  eatingRate: number,
  hours: number
): boolean => {
  let accruedHours = 0;

  for (const pile of piles) {
    accruedHours += Math.ceil(pile / eatingRate);
  }

  return accruedHours <= hours;
};

export const bananaPile = (piles: number[], hours: number) => {
  let low = 1,
    high = Math.max(...piles),
    bananasPerHour = 1;

  while (low <= high) {
    const possibleEatingRate = Math.floor((low + high) / 2);
    const isFeasible = feasible(piles, possibleEatingRate, hours);

    if (isFeasible) {
      bananasPerHour = possibleEatingRate;
      high = possibleEatingRate - 1;
    } else {
      low = possibleEatingRate + 1;
    }
  }

  return bananasPerHour;
};
