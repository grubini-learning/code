export abstract class ASortable<T> {
  constructor(public data: T) {}

  abstract get length(): number;
  abstract compare(idxA: number, idxB: number): boolean;
  abstract swap(idxA: number, idxB: number): void;

  public bubbleSort(): void {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
