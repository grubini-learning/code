import { describe, expect, it } from "@jest/globals";
import { firstOcurrence } from "./SearchFirstOcurrence";

// console.log(test(firstOcurrence([2, 3, 5, 7, 11, 13, 17, 19], 11), 4, ""));
// console.log(
//   test(firstOcurrence([1, 3, 3, 3, 3, 6, 10, 10, 10, 100], 3), 1, "")
// );

describe("Get the first ocurrence of target in the list", () => {
  it("is the 4th idx element", () => {
    const list = [2, 3, 5, 7, 11, 13, 17, 19];
    const target = 11;

    expect(firstOcurrence(list, target)).toBe(4);
  });

  it("is the 1st idx element", () => {
    const list = [1, 3, 3, 3, 3, 6, 10, 10, 10, 100];
    const target = 3;

    expect(firstOcurrence(list, target)).toBe(1);
  });
});
