// The goal is to preserve the primitives and Arrays, but flatten the objects such that the properties are now on root level

type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends unknown[]
    ? Flatten<[...First, ...Flatten<Rest>]>
    : [First, ...Flatten<Rest>]
  : [];

type Flattened = Flatten<[1, 2, [3, 4], [[[5]]]]>;
export const test: Flattened = [1, 2, 3, 4, 5];

export const flatten = (inputArray: any[]) => {
  let outputArray: any[] = [];

  const recursion = (index: number, inputArray: any[]) => {
    if (index >= inputArray.length) return;

    if (Array.isArray(inputArray[index])) {
      recursion(0, inputArray[index]);
    } else {
      outputArray.push(inputArray[index]);
    }

    recursion(index + 1, inputArray);
  };

  recursion(0, inputArray);
  return outputArray;
};

const result = [1, 2, [3, 4], [[[5]]]].flat(Infinity);
const flatArray = flatten([1, 2, [3, 4], [[[5]]]]);

console.log(flatArray);
console.log(result);
