import { ASortable } from "./ASortable.class";

export class NumberCollection extends ASortable<number[]> {
  constructor(data: number[]) {
    super(data);
  }

  get length(): number {
    return this.data.length;
  }

  compare(idxA: number, idxB: number): boolean {
    return this.data[idxA] > this.data[idxB];
  }

  swap(idxA: number, idxB: number): void {
    const temp = this.data[idxB];
    this.data[idxB] = this.data[idxA];
    this.data[idxA] = temp;
  }
}
