import { type Person } from "./exporting";

/*
    used to import only the type information from a module. 
    It indicates that you are interested in using the types of exported values but not the actual runtime values

    1. Optimize code size
    2. Leverages tree shaking when used,  it signals to bundlers that this code can be deleted
    3. Improve readability and maintainability
*/

export class Professional implements Person {
  constructor(public name: string, public age: number) {}
}
