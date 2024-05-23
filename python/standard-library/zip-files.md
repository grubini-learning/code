# Working with zip files

## Write

```python
from pathlib import Path
from zipfile import ZipFile

with ZipFile('files.zip', 'w') as zip:
    for path in Path('ecommerce').rglob('*.*'):
        zip.write(path)
```

## Read

```python
from pathlib import Path
from zipfile import ZipFile

with ZipFile("files.zip") as zip:
    zip.namelist()
    info = zip.getinfo('ecommerce/__init__.py')

    info.file_size
    info.compress_size

    # specify dir to extract the files to
    zip.extractall('extract')
```
