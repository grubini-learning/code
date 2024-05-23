# Polymorphism

Many forms, determined at runtime, if it quack like a duck, walks like a duck, it is a duck!

```python
import abc from ABC, abstractmethod

class UIControl(ABC):
    @abstractmethod
    def draw(self):
        pass

class TextBox(UIControl):
    def draw(self):
        print('TextBox')

class DropdownList(UIControl):
    print('Dropdown')

def draw(controls):
    for control in controls:
        control.draw()

txtBox = TextBox()
ddl = DropdownList()
draw([txtBox, ddl])
```
