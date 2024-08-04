import requests
from bs4 import BeautifulSoup
import pandas as pd

url = "https://www.sac-isc.gc.ca/eng/1351185180120/1351685455328"

response = requests.get(url)

counter = 0

if response.status_code == 200:
    soup = BeautifulSoup(response.content, 'html.parser')
    
    table = soup.find('table')
    
    if table:
        rows = table.find_all('tr')
        
        ids = []
        names = []
        provinces = []
        institutions = []
        fields_of_study = []
        indigenous_groups = []
        deadlines = []
        urls = []
        
        for row in rows[1:]:
            
            cols = row.find_all('td')
            
            if len(cols) > 0:
                id = counter
                name = cols[0].get_text(strip=True)
                province = cols[1].get_text(strip=True)
                institution = cols[2].get_text(strip=True)
                field_of_study = cols[3].get_text(strip=True)
                indigenous_group = cols[4].get_text(strip=True)
                deadline = cols[5].get_text(strip=True)
                link = cols[0].find('a')['href'] if cols[0].find('a') else None
                
                counter += 1
                
                ids.append(id)
                names.append(name)
                provinces.append(province)
                institutions.append(institution)
                fields_of_study.append(field_of_study)
                indigenous_groups.append(indigenous_group)
                deadlines.append(deadline)
                urls.append(link)
            

        data = {
            'id': ids,
            'ScholarshipName': names,
            'Value': 0,
            'Requirements': indigenous_groups,
            'ApplicationPeriod': deadlines,
            'Level': fields_of_study,
            'Where': provinces,
            'Link': urls
        }
        df = pd.DataFrame(data)
        
        print(df)
    else:
        print("Table not found.")
else:
    print(f"Failed to retrieve the page. Status code: {response.status_code}")

df.to_csv('scholarships.csv', index=False)
