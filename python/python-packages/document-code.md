# Document my code

## Docstrings

```python
""" These module provides functions to convert a PDF to text

    A more detailed explanation.
"""

class Converter:
    """
        A simple converter for converting PDFs to text.
    """

    def convert(path):
        """
        Convert the given PDF to text

        Parameters:
        path (str): The path to a PDF file.

        Returns:
        str: The content of the PDF file as text.
        """
        print('pdf2text')
```

## Use pydoc3 to look at packages documentation

- `pydoc3 math`
- write documentation to html file - `pydoc3 -w math`
- start a web server with the documentation for all packages - `pydoc3 -p 1234`
