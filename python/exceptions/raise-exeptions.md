# Raise exceptions

## Raising exceptions like this is costly

```python
def calculate_xfactor(age):
    if age <= 0:
        raise BaseException("Age cannot be 0 or less")

try:
    calculate_xfactor(-1)
except BaseException as error:
    print(error)
```

## Resources

- [Built in exceptions](https://docs.python.org/3/library/exceptions.html)

## Treat exceptions lis this whenever we can

```python
def calculate_xfactor(age):
    if age <= 0:
        return None
    return 10 / age


xfactor = calculate_xfactor(-1)

if xfactor == None:
    pass
```
