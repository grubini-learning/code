function printName(person: { first: string; last: string; age: number }): void {
  const { first, last, age } = person;

  console.log(`Hello ${first} ${last}, your age is ${age}`);
}

let coordinate: { x: number; y: number } = { x: 1, y: 1 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

/*
    Object literals as parameters strictly check for specified properties, 
    while references only require the presence of the declared properties in the parameters.
*/
// STRICT
// printName({
//   first: "Giovani",
//   last: "Rubini",
//   age: 35,
//   hobbies: ["surf", "snowboard"],
// });
// LOOSE
const me = {
  first: "Giovani",
  last: "Rubini",
  age: 35,
  hobbies: ["surf", "snowboard"],
};
printName(me);
