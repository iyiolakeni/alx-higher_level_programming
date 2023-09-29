#!/usr/bin/python3
"""Fetches https://alx-intranet.hbtn.io/status."""
import urllib.request

url = "https://alx-intranet.hbtn.io/status"
with urlib.request.urlopen(url) as response:
    body = response.read()
    utf8_content = body.decode('utf-8')
    print("Body response:")
    print("\t- type:", type(body))
    print("\t- content:", body)
    print("\t- utf8 content:", utf8_content)
