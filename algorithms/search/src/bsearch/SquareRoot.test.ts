import { describe, it, expect } from "@jest/globals";
import { squareRootEstimate } from "./SquareRootEstimation";

describe("Estimates the square root of a number without using the squared root utility", () => {
  it("is 0 as the estimated root of 0", () => {
    expect(squareRootEstimate(0)).toBe(0);
  });

  it("is 1 as the estimated root of 1", () => {
    expect(squareRootEstimate(1)).toBe(1);
  });

  it("is 2 as the estimated root of 8", () => {
    expect(squareRootEstimate(8)).toBe(2);
  });

  it("is 4 as the estimated root of 16", () => {
    expect(squareRootEstimate(16)).toBe(4);
  });
});
