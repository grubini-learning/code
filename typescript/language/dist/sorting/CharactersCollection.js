"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const ASortable_class_1 = require("./ASortable.class");
class CharactersCollection extends ASortable_class_1.ASortable {
    constructor(data) {
        super(data);
    }
    get length() {
        return this.data.length;
    }
    compare(idxA, idxB) {
        const itemA = this.data[idxA];
        const itemB = this.data[idxB];
        return itemA.localeCompare(itemB) > 0;
    }
    swap(idxA, idxB) {
        const dataList = this.data.split("");
        const itemB = dataList[idxB];
        dataList[idxB] = dataList[idxA];
        dataList[idxA] = itemB;
        this.data = dataList.join("");
    }
}
exports.CharactersCollection = CharactersCollection;
