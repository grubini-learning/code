import { describe, it, expect } from "@jest/globals";

import { newsPaper } from "./NewsPapers";

describe("Determines minimum amount of time for X workers to read a stack of news papers", () => {
  it("should take 7 minutes at a minimum to read [2, 3, 5, 7] with 3 workers", () => {
    expect(newsPaper([2, 3, 5, 7], 3)).toBe(7);
  });

  it("should take 18 minutes at a minimum to read [7, 2, 5, 10, 8] with 2 workers", () => {
    expect(newsPaper([7, 2, 5, 10, 8], 2)).toBe(18);
  });
});
