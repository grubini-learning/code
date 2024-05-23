# Working with SQLITE DB

## Write

```python
import sqlite3
import json
from pathlib import Path


movies = json.loads(Path('movies.json').read_text())

with sqlite3.connect("db.sqlite3") as conn:
    command = 'INSERT INTO Movies VALUES(?, ?, ?)"
    for movie in movies:
        conn.execute(command, tuple(movie.values()))
    conn.commit()
```

## Read

```python
import sqlite3
import json
from pathlib import Path

with sqlite3.connect('db.sqlite3') as conn:
    command = "SELECT * FROM Movies"
    cursor = conn.execute(command)

    movies = cursor.fetchall()

    for movie in movies:
        print(movie)
```
