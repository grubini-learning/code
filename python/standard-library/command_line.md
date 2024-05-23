# Command line arguments

```python
import sys

sys.argv # [app.py, '-a', '-b']

# Command: python3 app.py 1234

if len(sys.argv) == 1: # the user has not supplied any arguments
    print('USAGE: python3 app.py <password>')
else:
    password = sys.argv[1]
    print(password)
```
