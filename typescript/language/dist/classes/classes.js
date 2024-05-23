"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Private_instances, _Private_hidden, _Private_secret, _Player_score;
// In lower version than es2015 # makes property invisible to the outside, while private accessor,
// recognizes that there is a property, just that its marked private.
class Private {
    constructor() {
        _Private_instances.add(this);
        _Private_hidden.set(this, "I am hidden from the outside");
        this.recognized = "I am recognized as a private property from the outside";
    }
}
_Private_hidden = new WeakMap(), _Private_instances = new WeakSet(), _Private_secret = function _Private_secret() {
    console.log("i am a secret");
};
//GETTERS: is called as a property, but it runs as a method
class Human {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    get fullName() {
        return `${this.first} ${this.last}`;
    }
}
const bob = new Human("Bob", "Smith");
console.log(bob.fullName);
// SETTERS: function to sanitize the input
class Player {
    constructor() {
        _Player_score.set(this, 0);
    }
    get score() {
        return __classPrivateFieldGet(this, _Player_score, "f");
    }
    set score(value) {
        if (value < 0 || typeof value !== "number")
            throw new Error("Score must be a valid positive number");
        __classPrivateFieldSet(this, _Player_score, value, "f");
    }
}
_Player_score = new WeakMap();
// Once given a value for a readonly property, it won't change
class ReadOnly {
    constructor(value) {
        this.name = "Test";
        this.setOnce = value;
    }
}
const r = new ReadOnly("set");
