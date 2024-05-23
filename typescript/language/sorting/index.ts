import { CharactersCollection } from "./CharactersCollection";
import { LinkedListCollection, Node } from "./LinkedListCollection";
import { NumberCollection } from "./NumberCollection";

const numbers = new NumberCollection([4, 3, 2, 5, 1]);
numbers.bubbleSort();
console.log("these are the numbers: ", numbers.data);

const characters = new CharactersCollection("Xaaaaa");
characters.bubbleSort();
console.log("these are the characters: ", characters.data);

const ll = new LinkedListCollection(new Node(500));
ll.add(-10);
ll.add(-3);
ll.add(4);
ll.print();
ll.bubbleSort();
ll.print();

const ls = new LinkedListCollection(new Node("X"));
ls.add("c");
ls.add("b");
ls.add("b");
ls.add("a");
ls.add("A");

ls.print();
ls.bubbleSort();
ls.print();
