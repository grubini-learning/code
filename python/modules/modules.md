# System modules

When loading python modules, it will also execute any statements

## Dir

We can get a list of attributes an methods defined in an object. Useful for debugging

```python
print(dir(sales))
# ['__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'calc_shipping', 'calc_tax', 'contact']
```

## Magic attributes

```python
print(sales.__name__) # name of module
print(sales.__package__) # name of package
print(sales.__file__) # name of file
```

## Scripts

When we execute files from an external file the magic attribute `__name__` gets a different value than if we executed the file directly

```python
def calc_tax():
    pass

if __name__ == '__main__':
    calc_tax()
    print("Sales started")
```
