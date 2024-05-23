export const assert = (expected: any, actual: any, description: string) => {
  let message = "passed";

  if (JSON.stringify(expected) !== JSON.stringify(actual)) {
    message = `Error: ${description}, Expected ${expected}, but got ${actual}`;
  }

  return message;
};
