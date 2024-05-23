# Utility functions

- `type()` - tells the type of a variable
- `len()`
- `sorted()` - takes in an iterable and sorts it for us, returning a new copy
- `map()` - takes in a function and one or more iterables
- `from timeit import timeit` - with this we can time execution of our code
  - code1 = """
    def my_func():
    print(1)
    """
  - timeit("first code", code1, number = 10000)
