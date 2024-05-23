# Sets

Its a collection with no duplicates

```python
numbers = [1, 1, 2, 3, 4]
# {1, 2, 3, 4}
uniques = set(numbers)
```

## Mathematical operations supported

```python
numbers = [1, 1, 2, 3, 4]
first = set(numbers)
second = {1, 5}

# Prints the union between both sets, {1, 2, 3, 4, 5}
print(first | second)

# Prints the intersection between both sets, {1}
print(first & second)

# Prints the difference between both sets, {2, 3, 4}
print(first - second)

# Prints the numbers in both sets, but not the intersection, {2, 3, 4, 5}
print(first ^ second)
```
