"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professional = void 0;
/*
    used to import only the type information from a module.
    It indicates that you are interested in using the types of exported values but not the actual runtime values

    1. Optimize code size
    2. Leverages tree shaking when used,  it signals to bundlers that this code can be deleted
    3. Improve readability and maintainability
*/
class Professional {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
exports.Professional = Professional;
