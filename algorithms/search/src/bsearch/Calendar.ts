/*
    goal: Add new events without creating a collision.
          - collision happens when dates have an overlap 
    input: start, end numbers
    output: boolean
    constraints:
      1. No overlap in the already booked dates
    edge cases:
    ideas:
      1. Flatten dates list, look for the smallest bigger number than the start.
        1.1 [null, [15, 20], null, null] add (20, 30)
          1.1.1 tests [15, 20], bSearch gives you idx is 1
          1.1.2 is there a spot after 1?
          1.1.3 [null, [15, 20], [20, 30], null]
        1.2 [null, [15, 20], [20, 30], null] add (5, 9)
          1.2.1 tests [15, 20, 20, 30], bSearch idx is 0
      2. Find the smallest date from the list that is bigger than our start date
    traces:
     c1. [], [10, 20], [30, 35]
        1. If new start + end is greater 20 + 30
        2. [], [10, 20], [20, 30], [30, 35]
    manual steps:
    pseudocode:
*/

class MyCalendar {
  private calendar: [start: number, end: number][] = new Array();

  private conflict(
    sDate1: number,
    eDate1: number,
    sDate2: number,
    eDate2: number
  ): boolean {
    return (
      (sDate2 >= sDate1 && sDate2 <= eDate1) ||
      (eDate2 >= sDate1 && eDate2 <= eDate1)
    );
  }

  public print() {
    console.log("Current calendar: ", this.calendar);
  }

  // Returns true if it can book with no collision
  public book(start: number, end: number): boolean {
    let low = 0,
      high = this.calendar.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const bookedStartDate = this.calendar[mid][0];
      const bookedEndDate = this.calendar[mid][1];

      if (this.conflict(bookedStartDate, bookedEndDate, start, end)) {
        return false;
      }

      if (start >= bookedEndDate) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    this.calendar[low] = [start, end];
    return true;
  }
}

const myCalendar = new MyCalendar();
console.log(myCalendar.book(10, 20));
myCalendar.print();
console.log(myCalendar.book(15, 25));
myCalendar.print();
console.log(myCalendar.book(20, 30));
myCalendar.print();
