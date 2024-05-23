import { ASortable } from "./ASortable.class";

export class CharactersCollection extends ASortable<string> {
  constructor(data: string) {
    super(data);
  }

  get length(): number {
    return this.data.length;
  }

  compare(idxA: number, idxB: number): boolean {
    const itemA = this.data[idxA];
    const itemB = this.data[idxB];

    return itemA.localeCompare(itemB) > 0;
  }

  swap(idxA: number, idxB: number): void {
    const dataList = this.data.split("");
    const itemB = dataList[idxB];

    dataList[idxB] = dataList[idxA];
    dataList[idxA] = itemB;

    this.data = dataList.join("");
  }
}
