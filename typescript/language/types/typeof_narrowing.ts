// When dealing with primitives we can use typeof
const triple = (value: string | number): string => {
  if (typeof value === "string") {
    return value.repeat(3);
  }

  return "hi".repeat(value);
};

//Truthiness guard
const printLetters = (str: string | null) => {
  if (!str) {
    console.log("no word was provided");
  } else {
    str.split("").forEach((element) => {
      console.log(element);
    });
  }
};

//Equality narrowing
const someFunc = (x: string | boolean, y: string | number) => {
  if (x === y) {
    x.toUpperCase();
    y.toUpperCase();
  } else {
    console.log(x);
    console.log(y);
  }
};

//Narrowing with the In operator
// We have to know ahead of time that ins and outs of the interfaces.
interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

const getRunTime = (media: Movie | TVShow) => {
  if ("episodeDuration" in media) {
    return media.numEpisodes * media.episodeDuration;
  }

  return media.duration;
};

//instanceof Narrowing: When working with classes
const printFullDate = (date: Date | string) => {
  if (date instanceof Date) {
    return date.toUTCString();
  }
  return new Date(date).toUTCString();
};

// Type predicates: return value of a function that tells Typescript, that it is a specified type of data.
// We have to know ahead of time that ins and outs of the interfaces.
interface Cat {
  name: string;
  numOfLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

const isCat = (animal: Cat | Dog): animal is Cat => {
  return "numOfLives" in animal;
};

const makeNoise = (animal: Cat | Dog): void => {
  if (isCat(animal)) {
    console.log(`I live for ${animal.numOfLives} Meowwww`);
  } else {
  }
};

//Discriminated Unions: property shared across interfaces that is has a literal as a value
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

const getOtherProperty = (shape: Shape): number => {
  const { kind } = shape;

  switch (kind) {
    case "circle":
      return shape.radius;
    case "square":
      return shape.sideLength;
    default:
      // Exhaustive checking: assign it early on, so if a new interface is created but not handled in this function, we get an error.
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
};
