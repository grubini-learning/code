# Data Types

## Primitive Types

- whole numbers
  - byte - (-128 to 127) - 8 bits - 2 ^ 7
  - short - (-32768 to 32767) - 16 bits - 2 ^ 15
  - int - Integer.MIN_VALUE to Integer.MAX_VALUE - 32 bits - 2 ^ 31
    - on divisions the result will be an integer even if we are expecting a decimal
  - long - 100L - 64 bits - 2 ^ 63
    - must use an L suffix if its out of the range of an integer
- decimals
  - float - 32 bits - 5f
  - double - 64 bits - 5d
    - faster to process on modern computers
    - more precise and it can handle larger numbers
    - math functions are often written to process doubles and not floats
- short
- char
  - char myChar = 'D';
- boolean

## Wrapper class

Provides simple operations, as well as basic information, which cannot be stored on the primitive itself.

## Declarations

```java
// One line
short myMinShortValue = Short.MIN_VALUE; int myMinIntValue = Integer.MIN_VALUE;
byte myMinByteValue = Byte.MIN_VALUE, myMaxByteValue = Byte.MAX_VALUE;
```

## Casting

```java
// This casting is needed because Java compiler does not attempt to evaluate the value in a variable and treats the result as an int
(byte) (myMinByteValue / 2)
```
