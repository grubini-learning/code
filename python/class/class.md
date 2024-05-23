# Class

- \_\_main\_\_ is our module
- `isinstance(point, Point)` - to see if the object is an instance of our class with a True or False

## Methods

All methods have self as a parameter

- **class methods**: factory methods
- **instance methods**
- [**magic methods**](https://rszalski.github.io/magicmethods/): called automatically by python interpreter and are inherited from another class

## Attributes

- **class attributes** are shared across all instances of a class
- **instance level**

## Comparing objects

```python
print()
```

```python
class Point:
    default_color = 'red'

    def __init__(self, x, y):
        self.x = x
        self.y = y

    @classmethod
    def zero(cls):
        return cls(0, 0)

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

    def __str__(self):
        return f"({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __gt__(self, other):
        return self.x > other.x and self.y > other.y

    def draw(self):
        print(f"Point ({self.x}, {self.y})")
```

```python
class TagCloud:
    def __init(self):
        self.tags = {}

    def add(self, tag):
        self.tags[tag.lower()] = self.tags.get(tag.lower(), 0) + 1

    def __getitem__(self, tag):
        return self.tags.get(tag.lower(), 0)

    def __setitem__(self, tag, count):
        self.tags[tag.lower()] = count

    def __len__(self):
        return len(self.tags)

    def __iter__(self):
        # returns and iterable object that gives us one item at a time in a for loop
        return iter(self.tags)
```
