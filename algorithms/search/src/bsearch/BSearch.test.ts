import { describe, expect, it } from "@jest/globals";
import { binarySearch } from "./BSearch";

describe("binary searches", () => {
  it("returns -1 when empty list", () => {
    const list = [];
    const target = 2;

    expect(binarySearch(list, target)).toBe(-1);
  });

  it("returns -1 when target is not found in list", () => {
    const list = [3, 4, 5];
    const target = 2;

    expect(binarySearch(list, target)).toBe(-1);
  });

  it("returns the position where the target was found in the list", () => {
    const list = [5, 8, 9, 12];
    const target = 8;

    expect(binarySearch(list, target)).toBe(1);
  });
});
