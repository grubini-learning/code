# Dictionaries

key -> value

```python
point = {"x": 1, "y": 2}

point = dict(x = 1, y = 2)

point["x"]

point["z"] = 20
```

## Obtain values

```python
point["z"] # but if the key doesn't exist we get an error

# 1st safe way to check existence
if "a" in point:
    point["a"]

# 2nd way to check for existence
point.get("a") # if it doesn't exist we get None or we can specify a default value
```

## Delete values

```python
del point["x"]
```

## Looping through a dictionary

```python
for key, value in point.items():
    print(key, value)
```

## Comprehensions with dictionaries

```python
# {0, 2, 4, 6, 8}
values = {x:  x * 2 for x in range(5)}
```
