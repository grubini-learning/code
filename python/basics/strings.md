# Strings

## Methods

- `.find('y')` - returns the index of the letter or -1 if not found
- `in` - checks to see if x is in y, returns a boolean
- `len('string')` - to get the number of characters
- `.lower()`
- `.ord('b')` - gives the ascii representation of the character
- `replace('for', 'to')` - if string is not found it doesn't return anything
- **slice** a string - `'string'[0:3]` - the character at the last index is not included
  - `'string'[0:]`, if we don't include the end index, we get all the way to the end
  - `'string'[:3]`, if we don't include the start index, we start from 0 as a default
  - `'string'[:]`, if we only include the separator, we get a copy of the string
- `.strip()` - gets rid of white spaces
- `.upper()` - returns a new string
- `.title()` - capitalizes the first letter of every word in the string
  - variations are `.lstrip()` | `.rstrip()`

## Using variables inside a string

- F Strings

```python
  print(f'My name is {name})
```

- Concatenation

```python
print('My name is ' + name)
```

- Conversion Specifier

```python
print('My name is' % num)

or

print('My name is %(name) and my age is %(age)' % { 'name': 'Giovani', 'age': 35 })
```

- String template

```python
string.Template('My name is').substitute(locals())
```
