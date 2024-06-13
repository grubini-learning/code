# Publish packages

1.  create account in `pypi`
2.  install three tools globally - `pip3 install setuptools wheel twine`
3.  `mkdir [mypdf]`
4.  create a directory

    - with the same name as the name of the package
      - add `__init.py__` file
      - add a couple of modules
    - tests
    - data
    - `setup.py`

    ```python
        import setuptools
        from pathlib import Path

        setuptools.setup(
            name = "mypdf",
            version = 1.0,
            long_description = Path('README.MD').read_text(),
            packages = setuptools.find_packages(exclude = ['tests', 'data'])
        )
    ```

    - README.md
    - [LICENSE](www.choosealicense.com)

5.  Generate a distribution file `python3 setup.py sdist bdist_wheel`
6.  Upload to `pypi.org` - `twine upload dist/*`
