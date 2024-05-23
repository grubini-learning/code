# Exceptions

## Lists

```python
numbers [1, 2]

numbers[3]
# list index out of range
```

## String

```python
age = int(input("Age :"))

# Entered a

# Error: invalid literal for int() with base 10: 'a'
```

## Handle Exceptions

```python
try:
    age = int(input("Age: "))
    xfactor = 10 / age
except (ValueError, ZeroDivisionError):
    print('You did not enter a valid age.')
    print(ex)
except ZeroDivisionError:
    print("Your age can't be 0")
else:
    print("This runs when the try block was successful")
```

## Clean up

```python
try:
    file = open('app.py')
except ValueError:
    print(1)
else:
    print(2)
finally:
    file.close()
```

- if an object has the content management protocol we can use the with
  - \_\_enter\_\_
  - \_\_exit\_\_

```python
## because of the wit, python auto closes the resource\
try:
    with open('app.py') as file, open('another.txt') as target:
        print('file opened')
except:
    print(1)
```
