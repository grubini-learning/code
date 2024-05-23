# Paths and Directories

## Paths

```python
from pathlib import Path

Path("/user/local/bin")

# Current folder
Path()

# Combine paths
Path() / Path("ecommerce")

# Home directory of current user
Path.home()

path = Path("ecommerce/__init__.py")

path.exists()
path.is_file()
path.is_dir()

path.name
path.stem  # without the extension
path.suffix  # the extension
path.parent  # the parent folder
path.absolute()  # absolute value

# Create a new path object based on existing path, and change the name and extension of the file
path = path.with_name("file.txt")

# Change extension of a file
path = path.with_suffix(".txt")
```

## Directories

```python
from pathlib import Path

path = Path('ecommerce')

path.exists()
path.mkdir()
path.rmdir()
path.rename("ecommerce2")

path.iterdir() # we can get the files and directories in this path, we get a generator object

for p in path.iterdir():
    print(p)

or

paths = [p for p in path.iterdir() if p.is_dir()]

# To search recursively and by pattern use a glob
[p for p in path.glob('**/*.py')]
or
[p for p in path.rglob('*.py')]
```
