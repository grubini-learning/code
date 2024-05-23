# Operators

# Arithmetic Operators

- `+`
- `-`
- `/` - we get a floating number
- `//` - we get an integer
- `%` - modulo
- `**` - exponent

## Augmenting assignment operators

- `x += 3`
- `x -= 3`
- `x *= 3`

## Comparison Operators

- `>` | `>=` | `<` | `<=`
- `==` | `!=`

```python
if age >= 18 and age < 65:

or

# Chaining operators - easier to read
if 18 <= age < 65:
```

## Logical Operators

- `and`

```python
if high_income and good_credit:
    print("Eligible")
```

- `or`

```python
if high_income or good_credit:
    print("You can rent")
```

- `not` - inverses the boolean value - like `!` is javascript

```python
if (high_income or good_credit) and not student:
    print("Not eligible")
```

## Ternary Operator

```python
message = "Eligible" if (age >= 18) else "Not Eligible"
```
