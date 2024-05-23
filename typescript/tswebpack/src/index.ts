import Dog from "./Dog";
import ShelterDog from "./ShelterDog";
import { add, multiply } from "./utils";

const harvey: Dog = new Dog("Harvey", "Golden doodle", 2);
const buffy: ShelterDog = new ShelterDog(
  "buffy",
  "Pitbull",
  2,
  "Shelter Springs"
);
harvey.bark();
buffy.bark();
console.log("add: ", add(100000, 50000));
console.log("multiply: ", multiply(50000, 3));
