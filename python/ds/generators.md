# Generators

When working with infinite stream of data, they don't store all the values in memory, they generate a new value at each iteration.

- we don't know ahead of time how many objects the generator is going to produce, so it has no len()

```python
from sys import getsizeof

values = (x * 2 for x in range(10))

# gets the size
getsizeof(values)
```
