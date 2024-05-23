"use strict";
// When dealing with primitives we can use typeof
const triple = (value) => {
    if (typeof value === "string") {
        return value.repeat(3);
    }
    return "hi".repeat(value);
};
//Truthiness guard
const printLetters = (str) => {
    if (!str) {
        console.log("no word was provided");
    }
    else {
        str.split("").forEach((element) => {
            console.log(element);
        });
    }
};
//Equality narrowing
const someFunc = (x, y) => {
    if (x === y) {
        x.toUpperCase();
        y.toUpperCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
};
const getRunTime = (media) => {
    if ("episodeDuration" in media) {
        return media.numEpisodes * media.episodeDuration;
    }
    return media.duration;
};
//instanceof Narrowing: When working with classes
const printFullDate = (date) => {
    if (date instanceof Date) {
        return date.toUTCString();
    }
    return new Date(date).toUTCString();
};
const isCat = (animal) => {
    return "numOfLives" in animal;
};
const makeNoise = (animal) => {
    if (isCat(animal)) {
        console.log(`I live for ${animal.numOfLives} Meowwww`);
    }
    else {
    }
};
const getOtherProperty = (shape) => {
    const { kind } = shape;
    switch (kind) {
        case "circle":
            return shape.radius;
        case "square":
            return shape.sideLength;
        default:
            // Exhaustive checking: assign it early on, so if a new interface is created but not handled in this function, we get an error.
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
};
