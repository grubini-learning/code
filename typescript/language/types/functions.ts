// parameter types and return type for the function
function square(num: number): number {
  return num * num;
}

// Provide defaults
const pow = (n: number = 10, exponent: number = 3): number => {
  return n ** exponent;
};

const returnType = (): void => {
  console.log(
    "Void is a return type to indicate emptyness. Undefined and null can still be regarded as void"
  );
};

const logger = (): void => {
  console.log("Logger");

  return undefined;
};

const endless = (): never => {
  throw new Error("This type never returns like in erors, or endless loop");
};

const gameLoop = (): never => {
  while (true) {
    console.log("IT ALWAYS CONTINUES!");
  }
};

// PRACTICE

const isItLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
