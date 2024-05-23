// In lower version than es2015 # makes property invisible to the outside, while private accessor,
// recognizes that there is a property, just that its marked private.
class Private {
  #hidden: string = "I am hidden from the outside";
  private recognized: string =
    "I am recognized as a private property from the outside";

  #secret() {
    console.log("i am a secret");
  }
}

//GETTERS: is called as a property, but it runs as a method
class Human {
  constructor(public first: string, public last: string) {}

  get fullName() {
    return `${this.first} ${this.last}`;
  }
}

const bob = new Human("Bob", "Smith");
console.log(bob.fullName);

// SETTERS: function to sanitize the input
class Player {
  #score: number = 0;

  get score() {
    return this.#score;
  }

  set score(value: number) {
    if (value < 0 || typeof value !== "number")
      throw new Error("Score must be a valid positive number");

    this.#score = value;
  }
}

// Once given a value for a readonly property, it won't change
class ReadOnly {
  public readonly name: string = "Test";
  public readonly setOnce: string;

  constructor(value: string) {
    this.setOnce = value;
  }
}

const r = new ReadOnly("set");
