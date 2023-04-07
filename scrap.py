import requests
from bs4 import BeautifulSoup
import json

# Define the URL of the page containing the table
# url = 'https://www.usafepk.com/power-user/dca-form-details/98'

main_url = 'https://www.usafepk.com/power-user/view-dca-forms'

# Create a session object to store the cookies
main_cookies = {
    "ci_session" : "t5naub3116hahiqtpicvi50bhn9qlag2"
}

main_headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    'DNT': '1',
    'Referer': 'https://www.usafepk.com/power-user/view-dca-forms',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}


cookies = {
    'ci_session': '415qk4cto9imnncvv6gu1gvl30pnpbj9',
}

headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'max-age=0',
    'Connection': 'keep-alive',
    # 'Cookie': 'ci_session=415qk4cto9imnncvv6gu1gvl30pnpbj9',
    'DNT': '1',
    "Referer": "https://www.usafepk.com/power-user/pi-form-details/88" ,
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36',
    'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

# Send a request to the page and get the HTML content
response = requests.get(main_url, cookies=main_cookies, headers=main_headers)
html_content = response.content

# Create a BeautifulSoup object to parse the HTML content
soup = BeautifulSoup(html_content, 'html.parser')

# Find the table element on the page
table = soup.find('table')

# Create empty lists to store the table headers and data
heads = []
data = []

# Find all rows in the table
rows = table.find_all('tr')

# Loop through each row and extract the data

for i, row in enumerate(rows):
    # For the first row, extract the headers (TH)
    if i == 0:
        header_cells = row.find_all('th')
        for header_cell in header_cells:
            heads.append(header_cell.text.strip())
    else:
        # For other rows, extract the data (TD)
        data_cells = row.find_all('td')
        # Create a dictionary to store the row data
        row_data = {}
        for j, data_cell in enumerate(data_cells):
            row_data[heads[j]] = data_cell.text.strip()
        # Add the row data to the list of data
        data.append(row_data)

json_data = json.dumps(data)

# Create a JSON file to store the data
with open('data.json', 'w') as f:
    json.dump(data, f)

print(json_data)





# for i in range(24, 98):
#     url = f'https://www.usafepk.com/power-user/dca-form-details/{i}'
#     response = requests.get(url, cookies=cookies, headers=headers)
#     # Send a request to the page and get the HTML content
#     html_content = response.content

#     # Create a BeautifulSoup object to parse the HTML content
#     soup = BeautifulSoup(html_content, 'html.parser')

#     # Find the table element on the page
#     table = soup.find('table')

#     # Create empty lists to store the table headers and data
#     heads = []
#     data = []

#     # Find all rows in the table
#     rows = table.find_all('tr')

#     # Loop through each row and extract the data
#     for i, row in enumerate(rows):
#         # For the first row, extract the headers (TH)
#         if i == 0:
#             header_cells = row.find_all('th')
#             for header_cell in header_cells:
#                 heads.append(header_cell.text.strip())
#         else:
#             # For other rows, extract the data (TD)
#             data_cells = row.find_all('td')
#             # Create a dictionary to store the row data
#             row_data = {}
#             for j, data_cell in enumerate(data_cells):
#                 row_data[heads[j]] = data_cell.text.strip()
#             # Add the row data to the list of data
#             data.append(row_data)

#     # Convert the data to JSON format
#     json_data = json.dumps(data)

#     # Write the JSON data to the file
#     with open("data.json", "w") as file:
#         json.dump(json_data, file)

#     # Print the JSON data
#     print(json_data)
