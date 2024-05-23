# Working with JSON

## Write

```python
import json
from pathlib import Path

movies = [
    {'id': 1, 'title': 'Terminator', 'year': 1989 },
    {'id': 2, 'title': 'Kindergarten cop', 'year': 1993 },
]

data = json.dumps(movies)

Path('movies.json').write_text(data)
```

## Read

```python
import json
import pathlib from Path

data = Path('movies.json').read_text()
movies = json.loads(data)
```
