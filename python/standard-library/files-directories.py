from pathlib import Path

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
