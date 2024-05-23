# Lists

`letters = ["a", "b", "c", "d"]`

## Methods

- `count()` - returns the number of occurrences
- `sort()` - sorting lists

  - takes in _key_ and _reverse_
  - sort by a key
  - ```python
        items = [
            ("Product1", 10),
            ("Product2", 20),
            ("Product3", 30),
        ]

        items.sort(key = lambda item: item[1])
    ```

## Creating lists

1.

```python
# [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
zeros = [0] * 10
```

2.

```python
# [0, 1, 2, 3, 4]
numbers = list(range(5))
```

3.

```python
# ['H', 'e', 'l', 'l', 'o']
chars = list('Hello')
```

4. Creating from an extracted value
   _lambda arguments : expression_

```python
items = [
            ("Product1", 10),
            ("Product2", 20),
            ("Product3", 30),
        ]

# [10, 20, 30]
list(map(lambda item: item[1], items))
```

5. filter a function

```python
items = [
            ("Product1", 10),
            ("Product2", 20),
            ("Product3", 30),
        ]
list(filter(lambda item: item[1] >= 10, items))
```

6. zip a list - match multiple iterables with their matching positions

```python
list1 = [1, 2, 3]
list2 = [10, 20, 30]

# [(1, 10), (2, 20), (3, 30)]
list(zip(list1, list2))
```

## List Comprehension

These are more performant

`[expression for item in items] - applies the expression to every item in the list`

```python
items = [
            ("Product1", 10),
            ("Product2", 20),
            ("Product3", 30),
        ]
filtered = [item for item in items if item[1] >= 10]
```

## Concatenate lists

```python
zeros = [0] * 5
letters = ['a', 'b', 'c']

# [0, 0, 0, 0, 0, 'a', 'b', 'c']
combined = zeros + letters
```

## Operations

1. start:end:step

```python
# [0, 2, 4, 6, 8, 10]
numbers = list((range(11)))
print(numbers[::2])
```

2. reverse order

```python
# [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
numbers = list(range(11))
print(numbers[::-1])
```

## Unpacking lists

```python
first, second, third = [1, 2, 3]

first, second, *other = [1, 2, 3, 4, 4, 4, 4, 4]


first, *other, last = [1, 2, 2, 2, 2, 2, 3]
```

3. Getting the **index**

```python
for index, letter in enumerate(letters):
```

4. Adding or Removing

```python
# Add
letters.append('C')

# Add at position
letters.insert(0, '-')

# Removing at the end
letters.pop()

# Removing at index
letters.pop(0)

# Removing first occurrence
letters.remove('b')

## Deleting an item or range of items
del letters[0:3]

## Clear all objects
letters.clear()
```

5. Finding items

```python
letters = ['a', 'b', 'c']

# Gives you the index of the item in the list and if not found we get an error
letters.index('a')
```
