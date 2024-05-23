import { describe, it, expect } from "@jest/globals";
import { bananaPile } from "./BananaPile";

describe("Koko doesn't know how many bananas to eat per hour to eat all of the banana piles when the guard are gone.", () => {
  it("should be 4 bananas per hour", () => {
    expect(bananaPile([3, 6, 7, 11], 8)).toBe(4);
  });

  it("should be 30 bananas per hour", () => {
    expect(bananaPile([30, 11, 23, 4, 20], 5)).toBe(30);
  });
});
