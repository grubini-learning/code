import { ASortable } from "./ASortable.class";

export class Node<T> {
  public next: Node<T> | null = null;

  constructor(public data: T) {}
}

export class LinkedListCollection<T> extends ASortable<Node<T>> {
  public head: Node<T> | null = null;

  constructor(data: Node<T>) {
    super(data);
    this.head = data;
  }

  add(value: T): void {
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

  get length(): number {
    if (!this.head) return 0;

    let tail = this.head;
    let counter = 1;
    while (tail.next) {
      tail = tail.next;
      counter++;
    }
    return counter;
  }

  print(): void {
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

  at(idx: number): Node<T> {
    if (!this.head) throw new Error("Out of bounds");

    let counter = 0;
    let tail: Node<T> | null = this.head;

    while (tail) {
      if (counter === idx) return tail;

      counter++;
      tail = tail.next;
    }

    throw new Error("Out of bounds");
  }

  compare(idxA: number, idxB: number): boolean {
    if (!this.head) throw new Error("no Nodes to compare");
    const nodeA = this.at(idxA);
    const nodeB = this.at(idxB);

    if (typeof nodeA.data === "string") {
      return nodeA.data.localeCompare(nodeB.data as string) > 0;
    }

    return nodeA.data > nodeB.data;
  }

  swap(idxA: number, idxB: number): void {
    const nodeA = this.at(idxA);
    const nodeB = this.at(idxB);

    if (this.head === nodeA) {
      nodeA.next = nodeB.next;
      nodeB.next = nodeA;
      this.head = nodeB;
    } else {
      let node: Node<T> | null = this.head;

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
