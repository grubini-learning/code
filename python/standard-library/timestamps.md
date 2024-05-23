# Dates

## Timestamps

```python
import time

time.time() # Beginning of time, number of second after january, 1, 1970 - unix epoch time

def send_emails():
    for i in range(10000):
        pass

start = time.time()
send_emails()
end = time.time()

duration = end - start
```

## Datetime

```python
from datetime import datetime
import time

dt1 = datetime(2018, 1, 1)
dt2 = datetime.now()
dt = datetime.now()datetime.strptime("2018/01/01", "%Y/%m/%d") # convert string to datetime objects
dt = datetime.fromtimestamp(time.time())

print(f"{dt.year}/{dt.month}")

dt.strftime('%Y/%m') # converts a date time object into a string

print(dt2 > dt1)
```

## Resources

- [ptime](https://docs.python.org/3/library/datetime.html)
