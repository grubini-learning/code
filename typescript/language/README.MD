# Typescript

## What is it?

A super set of JS with static checking and detects errors based on the types of data.

## Advanced Areas

1. Decorators (Experimental): Functions that can (modify/change/anything) different properties and methods in the class that its used.
   - Used inside/on classes only

## Design Patterns

- Favor **Composition** over **Inheritance**.

  1. Abstract classes, characterized by a **is a** relationship between two classes.

     - Ex. Professional is a Human, because Professional has the methods and properties that belong to a Human as well.

  2. Inheritance, characterized by a **has a** relationship between two classes.

     - Ex. Professional has a reference to an outside form of Data, like Tool.

  3. Having passthrough methods are better handled with a get method that returns the function that actually uses the parameters.

## Building approach

1. Extract: First build one class with all the requirements, then extract reusable logic from it and turn it into a generic.

   - Think about how to do this extraction by composition
   - Think about how to do this extraction by inheritance

2. Use TS with JS libraries
   - option 1: Use the lib normally, adding in basic type annotations where possible.
   - option 2: Use a TS adapter library that has helpers to use your lib with TS.
   - option 3: Twist you lib to work with TS classes.
     - Must get better type safety (help TS to do a better job catching errors)
     - Significantly enhance the developer experience

## Configure the compiler

1. `tsc --init`
2. Optional `tsc -w <filename>.ts`
3. Optional `tsc -w`, Runs multiples files
4. Optional -files- Specifies a list of files to compile
5. Optional -include/exclude- `"include": ["src/**/*"]`, `"exclude: ["node_modules"]` by default excludes node_modules
6. outDir, specifies where the .js filed go
7. target, governs the js version that gets transpiled to.
8. Use lib to add type files that TS doesn't know about. These files en in `d.ts`

## Subjects

1. Types: Easy way to refer to the different properties and functions that a value has.

## Resources

- [Playground](https://www.typescriptlang.org/play?#code/Q)
- [TS Config](https://www.typescriptlang.org/tsconfig)

questions
difference between unknown, any, never
Enums are constants based data structures that store a set of named constants grouped around a central theme or intent.

- gives the typed value, but if its complex it will give uyou type of object
