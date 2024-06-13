# Application Programming Interfaces

Publicly accessible on the internet

## Http Requests

```python
import requests

url = 'https://my.url.com'
api_key = "API_KEY
headers = {
    "Authroization": f"Bearer {api_key}"
}
params = {
    "location": "NYC"
}

response = requests.get(url, headers = headers, params = params)

result = response.json()
```

## Ignore files

`config.py` and `.gitignore`

## Resources

- [Yelp API](https://www.yelp.com/developers)
- [Send text messages](https://www.twilio.com/en-us?utm_source=google&utm_medium=cpc&utm_term=twilio&utm_campaign=G_S_NAMER_Brand_ROW_RLSA&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gad_source=1&gclid=CjwKCAjw9cCyBhBzEiwAJTUWNQzLhKtnVAeSX5fawRhwwiFPGSqyhrq286T6A6In0ZgsSC6f2VqYQhoCPtYQAvD_BwE)
