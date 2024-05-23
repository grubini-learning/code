# Abstract base class

Purpose is to provide some common code to its derivatives, we have to define the abstract methods

```python
from abc import ABC, abstractmethod

class Person(ABC):

    @abstractmethod
    def speak(self):
        pass

    @abstractmethod
    def work(self):
        pass

class Engineer(Person):
    def speak(self):
        return 'I am an engineer'

    def work(self):
        return 'I work problem solving'

class Designer(Person):
    def speak(self):
        return 'I am a designer'

    def work(self)
```
