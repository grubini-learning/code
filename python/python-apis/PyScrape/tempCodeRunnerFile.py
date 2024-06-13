print(''.join([node.get('value') for node in soup.select(
    'section[id^="11"] main[id*="22"] article[id*="33"] p.flag')]))