import { describe, it, expect } from "@jest/globals";

import { firstEqualOrGreater } from "./FirstEqualOrGreater";

describe("First equal or greater", () => {
  it("the 1st element is equal or greater to 3", () => {
    const list = [1, 3];
    const target = 3;

    expect(firstEqualOrGreater(list, target)).toBe(1);
  });

  it("the 2nd element is equal or greater to 3", () => {
    const list = [1, 2, 3, 4];
    const target = 3;

    expect(firstEqualOrGreater(list, target)).toBe(2);
  });

  it("the third element is equal or greater to 3", () => {
    const list = [1, 1, 2, 3];
    const target = 3;

    expect(firstEqualOrGreater(list, target)).toBe(3);
  });

  it("the 0th element is equal or greater to 3", () => {
    const list = [3];
    const target = 3;

    expect(firstEqualOrGreater(list, target)).toBe(0);
  });
});
