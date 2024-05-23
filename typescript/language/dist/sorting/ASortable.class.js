"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ASortable = void 0;
class ASortable {
    constructor(data) {
        this.data = data;
    }
    bubbleSort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.ASortable = ASortable;
