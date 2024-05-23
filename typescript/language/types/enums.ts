// Allow to define a set of named constants
enum Responses {
  no = 0,
  yes = 1,
  maybe = 2,
}

enum OrderStatus {
  PROGRESS,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

// enums alone create more JS code as an Object. To avoid this use it as a const and it will just assign the value.
const enum DIRECTIONS {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}
