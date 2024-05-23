# Inheritance

Classes that have one or more feature and functions in common, try to limit it to two levels

```python
class Animal:
    def __init__(self):
        self.age = 1

    def eat(self):
        print("eat")

class Mammal(Animal):
    def __init__(self):
        super().__init__()
        self.weight = 2

    def walk(self):
        print("walk")

class Fish(Animal):
    def swim(self):
        print("swim")
```

## Multiple Inheritance

```python
class Flyer:
    def fly(self):
        pass

class Swimmer:
    pass

class FlyingFish(Flyer, Swimmer):
    pass
```

## with Built in types

We can use the built in types and add functionality

```python
class Text(str):
    def duplicate(self):
        return self + self

class TrackableList(list:
        return self + self

class TrackableList(list)
:
        return self + self

class TrackableList(list)
:
        return self + self

class TrackableList(list):
    def append(self, object):
        print("Append called")
        super().append(object)
```
