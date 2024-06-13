from selenium import webdriver

try:
    browser = webdriver.Chrome()

    browser.get('https://github.com/giovanirubini')
    repo = browser.find_element(by="id", value="284330986")
    repo.click()

    browser.implicitly_wait(1)

    header = browser.find_element(by="class name", value='heading-element')
    # browser.implicitly_wait(2)
    assert "GCPStore" == header.text

    browser.implicitly_wait(5)
except ValueError:
    print('the error is ' + ValueError)
