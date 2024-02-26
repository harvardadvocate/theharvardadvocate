import json
from bs4 import BeautifulSoup

# open blog json
with open('try1.json', 'r') as f:
    data = json.load(f)

# parse blog into list of dicts
put = []
for item in data:

    out = {}

    out['title'] = item['title']
    out['slug'] = item['slug']
    out['authors'] = item['author_name']
    out['mainImage'] = item['image_path']

    out['year'] = item['created'][4] # first four chars of datetime formatted YYYY-MM-DD TT:TT:TT
    out['issue'] = 'Blog posted on ' + item['created']

    # use bs4 to parse HTML quickly
    soup = BeautifulSoup(item['body'], 'html.parser')
    out['body'] = '\n\n'.join([i.get_text() for i in soup.find_all('p')])

    # params for contentItems that have no data in the json
    # out['bannerImage'] = ''
    # out['sections'] = ''
    # out['featuredOptions'] = ''
    # out['publishedAt'] = ''
    # out['images'] = ''

    put.append(out)

# output into json file
with open('output.json', 'w') as outf:
    json.dump(put, outf, indent=4)