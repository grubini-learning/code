# Python virtual environment

- Tools `Pipenv`, combines pip and virtual environments into a single tool chain
- `pip3 install pipenv`

1. `pipenv install requests`
2. `pipenv shell`
3. `exit`

- to install the dependencies of the pipfile.lock we run `pipenv install --ignore-pipfile`

## Pipfile

```pipfile
[[source]]
name = "pypi"
ul = "https://pypi.org/simple" # repository where the packages are downloaded from
verify_ssl = true

[dev-packages] # package that we use as part of our development process

[packages] # packages that our app depends on
requests = "*"

[requires] # specifies the version of python we need to run this app
python_version = "3.7"
```

## Commands

- See all the dependencies for our app `pipenv graph`
- Update outdated packages `pipenv update --outdated` `pipenv update [specific package]`
