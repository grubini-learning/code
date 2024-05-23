# Sending emails

```python
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
from pathlib import Path
import smtplib


# create a mime multipart object
message = MIMEMultipart()

message['from'] = 'Giovani Rubini'
message['to'] = 'grmsse@gmail.com'
message['subject'] = 'This is a test'
message.attach(MIMEText('Body'))
message.attach(MIMEImage(Path("image path").read_bytes()))

with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
    smtp.ehlo()  # establishes a con
    smtp.starttls()  # transpport layer security
    smtp.login('giovani.inc@gmail.com', '...')
    smtp.send_message(message)
    print('sent...')
```

## Templates

```python
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from pathlib import Path
from string import Template
import smtplib

template = Template(Path('template.html').read_text())

# create a mime multipart object
message = MIMEMultipart()

message['from'] = 'Giovani Rubini'
message['to'] = 'grmsse@gmail.com'
message['subject'] = 'This is a test'
# body = template.substitute({'name': 'Giovani'})
body = template.substitute(name = 'Giovani')

message.attach(MIMEText(body, 'html'))

with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
    smtp.ehlo()  # establishes a con
    smtp.starttls()  # transpport layer security
    smtp.login('giovani.inc@gmail.com', '...')
    smtp.send_message(message)
    print('sent...')
```
