"use strict";
// GENERICS: Allows us to define reusable functions and classes that work with multiple types.
function identity(item) {
    return item;
}
function getRandomElement(items) {
    const rando = Math.floor(Math.random() * (items.length - 1));
    return items[rando];
}
// Adding type constraints
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
// Provide default type
function makeList() {
    return [];
}
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(item) {
        this.queue.push(item);
    }
}
