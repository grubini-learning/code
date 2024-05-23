"use strict";
const printAge = (age) => {
    return `You are ${age}`;
};
// Type Narrowing
const calculateTax = (price, tax) => {
    if (typeof price === "string")
        price = parseFloat(price.replace("$", ""));
    return price * tax;
};
// Type Assertion (casting)
let mystery = "Hello world";
const numChars = mystery.length;
const charsLength = mystery.length;
// ARRAYS
const users = [];
const ushers = [];
const ticTacToe = [
    [null, "X", null],
    [null, null, null],
    [null, null, null],
];
const ticTax = [
    [null, "X", null],
    [null, null, null],
    [null, null, null],
];
const products = [
    { name: "Coke", price: 2.9 },
    { name: "Chili paste", price: 1.1 },
];
const calculateTotal = (products) => {
    return products.reduce((total, product) => (total += product.price), 0);
};
