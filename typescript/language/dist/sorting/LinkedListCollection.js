"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedListCollection = exports.Node = void 0;
const ASortable_class_1 = require("./ASortable.class");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedListCollection extends ASortable_class_1.ASortable {
    constructor(data) {
        super(data);
        this.head = null;
        this.head = data;
    }
    add(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = newNode;
    }
    get length() {
        if (!this.head)
            return 0;
        let tail = this.head;
        let counter = 1;
        while (tail.next) {
            tail = tail.next;
            counter++;
        }
        return counter;
    }
    print() {
        if (this.head) {
            const values = [];
            let tail = this.head;
            while (tail.next) {
                values.push(tail.data);
                tail = tail.next;
            }
            values.push(tail.data);
            console.log("the values are: ", values);
        }
    }
    at(idx) {
        if (!this.head)
            throw new Error("Out of bounds");
        let counter = 0;
        let tail = this.head;
        while (tail) {
            if (counter === idx)
                return tail;
            counter++;
            tail = tail.next;
        }
        throw new Error("Out of bounds");
    }
    compare(idxA, idxB) {
        if (!this.head)
            throw new Error("no Nodes to compare");
        const nodeA = this.at(idxA);
        const nodeB = this.at(idxB);
        if (typeof nodeA.data === "string") {
            return nodeA.data.localeCompare(nodeB.data) > 0;
        }
        return nodeA.data > nodeB.data;
    }
    swap(idxA, idxB) {
        const nodeA = this.at(idxA);
        const nodeB = this.at(idxB);
        if (this.head === nodeA) {
            nodeA.next = nodeB.next;
            nodeB.next = nodeA;
            this.head = nodeB;
        }
        else {
            let node = this.head;
            while (node) {
                const foundNodeBeforeA = node.next === nodeA;
                if (foundNodeBeforeA) {
                    node.next = nodeB;
                    nodeA.next = nodeB.next;
                    nodeB.next = nodeA;
                    return;
                }
                node = node.next;
            }
        }
    }
}
exports.LinkedListCollection = LinkedListCollection;
