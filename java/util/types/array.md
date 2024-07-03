# Array

Collection of elements

## Instantiation

```java
int[] integerArray = new int[10];

int[] firstFivePositives = {1, 2, 3, 4, 5};

int[] newArray;
newArray = new int[] {5, 4, 3, 2, 1};

int[][] newArrayDimension = new int[3][3];

int [][] array = new int[][]{
  {1, 2, 3},
  {11, 12, 13},
  {31, 32, 33}
};
int [][] array = {
  {1, 2, 3},
  {11, 12, 13},
  {31, 32, 33}
};
```

- when we don't use an array initializer statement, all array elements get initialized to the default value for that type
  - numeric primitives is 0
  - for booleans it is false
  - class type it is null

## Iterations

```java
// basic
for (init; expression; increment) {}

// enhanced
for (declaration : collection) {}
for (int[] outer : array2) {}
for (var outer: array) {}
```

## Variable arguments

- Rest operator

```java
public static void main(String... args) {}
```

## Methods

### .binarySearch

return the index if found or -1 if no match

- array has to be sorted
- if array has duplicates, there is no guarantee which one it'll match
- elements must be comparable

```java
String[] sArray = {1, 2, 4, 5};

int foundIndex = Arrays.binarySearch(sArray, 4);
```

### .equals

Takes order, value and length into account
`Arrays.equal(s1, s2)`

### toString

`String arrayElementsInAString = Arrays.toString(newArray)`

### .deepToString

For nested arrays
`Arrays.deepToString(array2);`

### .copyOf

For primitives the primitives get copied, but for objects the references get copied

`int[] firstArray = Arrays.copyOf(thirdArray, thirdArray.length)`

### .fill

`Array.fill(firstArray, 5)`

### .sort

`Arrays.sort(firstArray)`

## Resources

- [Array methods](https://docs.oracle.com/javase/8/docs/api/java/util/Arrays.html)
