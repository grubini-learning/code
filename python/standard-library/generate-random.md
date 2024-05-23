# Generate random values

```python
import random
import string

random.random() # generates a floating point number between 0 and 1
random.randint(1, 10) # generates a random integer between two numbers
random.choice([1, 2, 3, 4]) # randomly pics an element in the array
random.choices([1, 2, 3, 4], k = 2) # selects a random set of specified values from the array provided

# random password
"".join(random.choices(string.acii_letter + string.digits, k = 4))

# shuffling an array
numbers = [1, 2, 3, 4]
random.shuffle(numbers)
```
