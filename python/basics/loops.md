# Loops

## For loops

```python
for number in range(3):
    print("Sending a message")

for number in range(start, finish, step):
    print("Sending a message")
```

### Break out of the loop

```python
for number in range(3):
    if successful:
        break
else:
    print("Attempted three times and failed")
```

### Nested Loops

```python
for x in range(5):
    for y in range(3):
        print(f"{x}, {y}")
```

## While loops

```python
command = ""

while command.upper() != "QUIT":
    command = input(">")
    print("ECHO", command)

while True:
    command = input(">")
    print("ECHO", command)

    if command.lower() == 'quit':
        break
```
