# Format

## Text Block

"""
Text block
that can have a multi line string
""";

## Escape Sequence

- \\t - insert a tab character
- \\n - insert a new line character
- \\" - insert a double quote character
- \\ - insert a backslash character

## Printf

```java
System.out.printf("Your age is %d\n", age);
```

## String

```java
String.format("Age = %d, Birth year = %.2f%n", age, yearOfBirth);

"Your age is %d".formatted(age);
```

### Format Specifiers

%[argument_index$][flags][width][.precision]conversion

## Resources

- [Formatters](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)
