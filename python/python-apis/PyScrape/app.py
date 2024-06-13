import requests
from bs4 import BeautifulSoup

# url = 'https://stackoverflow.com/questions'

# response = requests.get(url)
# soup = BeautifulSoup(response.text, "html.parser")

# # questions = [soup.get("id", 0) for soup in soup.select('.question-summary')]
# questions = [{"title": soup.select_one('.s-link').get_text(), "vote": soup.select_one('.s-post-summary--stats-item-number').get_text()}
#              for soup in soup.select('[id^="question-summary"]')]

# Fetch the HTML from the given URL
url = 'https://tns4lpgmziiypnxxzel5ss5nyu0nftol.lambda-url.us-east-1.on.aws/challenge'
response = requests.get(url)

# Parse the HTML content with BeautifulSoup
soup = BeautifulSoup(response.content, "html.parser")

# Find all the DOM nodes that match the pattern
print(''.join([node.get('value') for node in soup.select(
    'code[data-class^="23"] div[data-tag*="93"] span[data-id*="21"] i.char')]))

'code[data-class^="23"] div[data-tag*="93"] span[data-id*="21"] i.char'

# print(questions)
