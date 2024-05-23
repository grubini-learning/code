# Queues

FIFO - resembles a line for a service

- When deleting an item instead of moving the other items in the list we can use a queue

## Creation

```python
from collections import deque

queue = deque([])
queue.append(1)
queue.append(2)
queue.append(3)
queue.popleft()
```
