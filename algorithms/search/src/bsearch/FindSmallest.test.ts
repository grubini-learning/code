import { describe, expect, it } from "@jest/globals";
import { findSmallest } from "./FindSmallest";

describe("find the smallest from a rotated and sorted array", () => {
  it("is the 4th idx of the list that contains the smallest element", () => {
    const list = [30, 40, 50, 10, 20];

    expect(findSmallest(list)).toBe(3);
  });

  it("is the last idx that containts the smallest element", () => {
    const list = [3, 5, 7, 11, 13, 17, 19, 2];

    expect(findSmallest(list)).toBe(7);
  });
});
