# Control Flow Statement

## If-Then

Conditional logic that executes a route if the statement evaluates to true

## Switch

Used when all if statements are testing a single variable state

```java
// OLD SWITCH
switch(value) {
    case x:
        // value for x
        break;
    case y:
        // value for y
        break
    default:
        // default case
}
```

```java
// NEW
switch (value) {
    case 1 -> System.out.println("Value was 1");
    case 2 -> System.out.println("Value was 2");
    case 3, 4, 5 -> {
       System.out.println("Was 3, 4, or 5");
    }
    default -> System.out.println("Value was NOT 1, 2, 3, 4, or 5");
}

return switch (month) {
    case "JANUARY", "FEBRUARY", "MARCH" -> "1st";
    case "APRIL", "MAY", "JUNE" -> "2nd";
    case "JULY", "AUGUST", "SEPTEMBER" -> "3rd";
    case "OCTOBER", "NOVEMBER", "DECEMBER" -> "4th";
    default -> "BAD";
}
```

## While loop

When the number of times that we want to iterate are unknown. The while loop will continue executing until the loop expression is false.

```java
while (true) {
    if (j > 5) {
        break;
    }
    System.out.println(j);
    j++;
}
```

## Do While

This loop always executes, at least once.

```java
do {

} while (expression);
```
