# Time deltas (duration)

```python
from datetime import datetime, timedelta

dt1 = datetime(2018, 1, 1) + timedelta(days = 1)
dt2 = datetime.now()

duration = dt2 - dt1
print(duration)
duration.days
duration.seconds
duration.total_seconds()
```
