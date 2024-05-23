"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberCollection = void 0;
const ASortable_class_1 = require("./ASortable.class");
class NumberCollection extends ASortable_class_1.ASortable {
    constructor(data) {
        super(data);
    }
    get length() {
        return this.data.length;
    }
    compare(idxA, idxB) {
        return this.data[idxA] > this.data[idxB];
    }
    swap(idxA, idxB) {
        const temp = this.data[idxB];
        this.data[idxB] = this.data[idxA];
        this.data[idxA] = temp;
    }
}
exports.NumberCollection = NumberCollection;
