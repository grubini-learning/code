// GENERICS: Allows us to define reusable functions and classes that work with multiple types.
function identity<T>(item: T): T {
  return item;
}

function getRandomElement<T>(items: T[]): T {
  const rando = Math.floor(Math.random() * (items.length - 1));

  return items[rando];
}

// Adding type constraints
function merge<T extends Object, U extends Object>(
  object1: T,
  object2: U
): T & U {
  return {
    ...object1,
    ...object2,
  };
}

// Provide default type
function makeList<T = number>(): T[] {
  return [];
}

//Generic classes
interface Song {
  title: string;
  artist: string;
}

interface Video {
  title: string;
  creator: string;
  resolution: string;
}

class Playlist<T> {
  public queue: T[] = [];

  add(item: T) {
    this.queue.push(item);
  }
}
