# Data classes

Working with object with no methods and just data we can use `namedtuples`

```python
from collections import namedtuple

# namedtuple([name], [properties]) they are immutable
Point = namedtuple("Point", ['x', 'y'])

p1 = Point(x = 1, y = 2)
p2 = Point(x = 1, y = 2)

print(p1 == p2)
```
