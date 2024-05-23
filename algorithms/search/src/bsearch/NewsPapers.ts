/*
    Issue: Minimize amount of time needed to read all news papers.
    Input: List of news papers read times, and number of coworkers.
    Output: minimum amount of time to read all news papers
    Constraints:
    Edge Cases:
    Ideas:
        1. how can I optimize? How do I convert into a montonic function?
            . Look for the max amount of time with the least news papers
        2. Sequential order of the least amount with the highest time to read.
        3. Establish a range, pick a time within that range and see if its 
           plausible to complete with the amount of coworkers given. X
    Traces:
        1. [2,3,5,7], num_coworkers = 3
        2. newspapers_read_times = [7,2,5,10,8], num_coworkers = 2
    Manual Steps:
        1. Look for the maximum reading time and that is your low.
        2. Add all times and that is the highest amount of time this could take.
        3. Pick a random** time from that range and determine if it's feasible 
           with the amount of workers given.

        c1.
            1. low is 7
            2. high is 17
            3. (17 + 7) / 2 is 12
            4. is it doable in 12 minutes with 3 workers?
                4.1 newspapers  are [2,3,5,7], real workers is 3 and limit time is 12 minutes
                4.2 time is 0, virtualWorkers is 0
                    4.2.1 2 + 3 is 5 > 12, no, so time is 5
                    4.2.2 5 + 5 is 10 > 12, no, so time is 10
                    4.2.3 10 + 5 is 15 > 12, yes, time is 0 + 5 virtualWorkers is 1
                    4.2.4 5 + 7 is 13 > 12, yes, time is 0 + 7 virtualWorkers is 2
                4.3 Since time is not 0, virtualWorkers is 3
                4.4 virtualCoworkers is <= workers, so it is feasible in 12 minutes
            5. so the smallest number must be to the left side on my range
            6. (7 + 11) / 2 is 9
            7. is it feasible in 9 minutes?
                7.1 news papers are [2,3,5,7], real wokers are 3, and limit time is 9 minutes
                7.2 time is 0, vWorkers are 0
                    7.2.1 is 5 > 9, no, time is 5
                    7.2.2 is 10 > 9, yes, time is 5, vWorkers is 1
                    7.2.3 is 12 > 9, yes, time is 7, vWorkers is 2
                7.3 vWorkers is 3
            8. it is feasible
            9. (7 + 8) / 2 is 7
            10. ans is 7
            11.(7 + 6) / 2 is 6
            12. 

    Pseudocode:
        1. establish a range of max time that one can take and 
           the accumulation of all the times if only one worker.
        2. while low <= high
            2.1 create a mid, which is a random amount of time
            2.2 ask if with that random amount of time and workers, it is plausible to finish?
                2.2.1 record mid, high is mid - 1, because you want the minimum.
                2.2.2 low is mid + 1, because you need a bigger amount of time to have it be plausible
        3. return ans
 */

const feasible = (
  newspaperTimes: number[],
  limit: number,
  realWorkers: number
): boolean => {
  let time = 0,
    vWorkers = 0;

  for (const newspaperTime of newspaperTimes) {
    if (time + newspaperTime > limit) {
      time = 0;
      vWorkers++;
    }

    time += newspaperTime;
  }

  if (time > 0) {
    vWorkers++;
  }

  return vWorkers <= realWorkers;
};

export const newsPaper = (
  newspaperTimes: number[],
  realWorkers: number
): number => {
  let low = Math.max(...newspaperTimes),
    high = newspaperTimes.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    ),
    ans = -1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const isFeasible = feasible(newspaperTimes, mid, realWorkers);

    if (isFeasible) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
};
