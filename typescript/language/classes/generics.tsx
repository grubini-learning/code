// GENERICS with arrow functions in JSX
const getRandom = <T,>(items: T[]): T => {
  const rando = Math.floor(Math.random() * (items.length - 1));

  return items[rando];
};
