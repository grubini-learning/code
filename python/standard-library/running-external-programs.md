# Running external programs

## Operating system

```python
import subprocess

completed = subprocess.run(['ls', '-l'],
                            capture_output = true
                            text = True)
completed.args # the arguments we supplied
completed.returncode # 0 (success) any error is a non 0 value
completed.stderr # indicates errors
completed.stdout # output of another program
```

## Runs other python script

```python
import subprocess

completed = subprocess.run(['python3', 'other.py']
                            capture_output = True,
                            text = True)
```
