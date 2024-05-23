"use strict";
// parameter types and return type for the function
function square(num) {
    return num * num;
}
// Provide defaults
const pow = (n = 10, exponent = 3) => {
    return n ** exponent;
};
const returnType = () => {
    console.log("Void is a return type to indicate emptyness. Undefined and null can still be regarded as void");
};
const logger = () => {
    console.log("Logger");
    return undefined;
};
const endless = () => {
    throw new Error("This type never returns like in erors, or endless loop");
};
const gameLoop = () => {
    while (true) {
        console.log("IT ALWAYS CONTINUES!");
    }
};
// PRACTICE
const isItLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};
