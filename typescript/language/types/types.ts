// Outlines the desired shape of an object, while improving code readability and reusability.
type Person = { first: string; last: string };

// OPTIONAL properties denoted by the ?
type Point = { x: number; y: number; z?: number };

// Mark readonly if the property should never change
type User = {
  readonly id: number;
  usernme: string;
  person: Person;
  talk: string;
};

// INTERSECTION types. We can have multiple types and combine them to form a single type with &
type SteinUser = { readonly id: number; username: string } & {
  person: Person;
  hobby: string;
};

// UNION TYPES: Finite number of possible types
type Age = number | string;
type FinalUser = User | SteinUser;

const printAge = (age: Age): string => {
  return `You are ${age}`;
};

// LITERAL TYPES
type Zero = 0 | "0" | "zero";

// Type Narrowing
const calculateTax = (price: number | string, tax: number): number => {
  if (typeof price === "string") price = parseFloat(price.replace("$", ""));

  return price * tax;
};

// Type Assertion (casting)
let mystery: unknown = "Hello world";
const numChars = (mystery as string).length;
const charsLength = (<string>mystery).length;

// ARRAYS
const users: User[] = [];
const ushers: Array<User> = [];
const ticTacToe: [string | null, string | null, string | null][] = [
  [null, "X", null],
  [null, null, null],
  [null, null, null],
];
const ticTax: (string | null)[][] = [
  [null, "X", null],
  [null, null, null],
  [null, null, null],
];

type Product = { name: string; price: number };

const products: Product[] = [
  { name: "Coke", price: 2.9 },
  { name: "Chili paste", price: 1.1 },
];

const calculateTotal = (products: Product[]): number => {
  return products.reduce((total, product) => (total += product.price), 0);
};
