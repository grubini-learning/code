# String Builder

Mutable class that lets us change its text value

```java
StringBuilder helloWorldBuilder = new StringBuilder("Hello" + "World");
helloWorldBuilder.append(" and Goodbye");

StringBuilder emptyStart32 = new StringBuilder(32);

StringBuilder builderPlus = new StringBuilder("Hello World");
builderPlus.append(" and Goodbye");

builderPlus.deleteCharAt(16).insert(16, "g");
builderPlus.replace(16, 17, "G");

builderPlus.reverse().setLength(7);
```

## Methods

- delete - deletes a substring using indices to specify a range
- deleteCharAt - deletes a substring using indices to specify a range
- insert - insert text at a specified position
- reverse - reverse the order of the characters in the sequence
- setLength - can truncate the sequence, or include null sequences to 'fill out' the sequence to that length
