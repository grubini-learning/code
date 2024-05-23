# Files

```python
from pathlib import Path
from time import ctime

path = Path('ecommerce/__init__.py')
path.exists()
path.rename('init.txt')
path.unlink()

# creation time, modified time, file size, last access time in epoch times
path.stat()
ctime(path.stat().st_ctime)

# Reading data from a file
path.read_bytes() # binary data

path.read_text() # contents of a file as a string

or

with open('__ini__.py', 'r') as file:
    ...

path.write_text('...')
path.write_bytes()
```

## Copy file to a different location

```python
from pathlib import Path

source = Path('ecommerce/__init__.py')
target = Path() + '__init__.py'

target.write_text(source.read_text())
```

or

```python
import shutil
from pathlib import Path

source = Path('ecommerce/__init__.py')
target = Path() / '__init__.py'

shutil.copy(source, target)
```
