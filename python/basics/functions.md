# Functions

All function by default return `None`

```python
def greet():
    print("Hi there, welcome aboard")
```

## Arguments

```python
def greet(first_name, last_name):
    print(f"{first_name} {last_name}")
```

## Prefix - Keyword arguments

Adds a descriptive name to the argument given

```python
print(greet(name = "Giovani"))
```

## Optional/default parameters

All the optional/default parameters must come after the required parameters

```python
def increment(number, by = 1):
    return number + by
```

## Rest parameters

Creates a tuple with the parameters we passed in

```python
def multiply(*numbers):
    print(numbers)

# (2, 3, 4, 5)
multiply(2, 3, 4, 5)
```

```python
def save_user(**user):
    print(user)

# {"id": 1, "name": "John", "age": 22} - dictionary
save_(id = 1, name = "John", age + 22)
```

## Types

- Perform a task

```python
def greet(name):
    return f"Hi {name}"
```

- Return a value

```python
def greet(name):
    return f "Hi {name}"
```
