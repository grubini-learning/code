// Allow us to describe the shape of OBJECTS
interface Individual {
  name: string;
  age: number;
}

// Optional
interface Self {
  readonly id: number;
  name: string;
  age: number;
  hobby?: string;
  describe: () => void;
  whatAge(): string;
}

// Types vs Interfaces
// 1. ReOpen and add on properties. if we want to add properties to an interface coming from an API
interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
}

const dog: Dog = { name: "Harvey", age: 2, breed: "Golden doodle" };

// 2. Inherit from another interface. We can extend from multiple interfaces
interface Consumer {
  level: "BRONCE" | "SILVER" | "GOLD";
}

interface Professional extends Individual, Consumer {
  profession: string;
  salary: number;
}

const ME: Professional = {
  name: "Giovani",
  age: 35,
  profession: "Software Engineer",
  salary: 150000,
  level: "GOLD",
};

// 3. Can only describe the shape of an object
