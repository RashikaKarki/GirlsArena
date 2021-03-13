from bs4 import BeautifulSoup
import csv
import pandas as pd
import os
import time
import requests
  
def getdata():
    url = "https://powertofly.com/events/"

    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')

    opportunitiesList = soup.find(id = "layout-events").find_all("div", class_ = "panel")

    opportunity_names = []
    opportunity_link = []
    opportunity_image = []
    opportunity_tags = []
    opportuity_starttime = []
    opportuity_endtime = []


    df = pd.DataFrame()
    for opportunity in opportunitiesList:
        try:
            opportunity_names.append(opportunity.find("h5").text)
            opportunity_link.append(opportunity.find("a").get('href'))
            opportunity_image.append(opportunity.find("img").get('src'))
            opportunity_tags.append(opportunity.find("p", class_ = "item-meta-infos").text.strip())
            opportuity_starttime.append(opportunity.find("span", class_ = "date").get('data-starts-at'))
            opportuity_endtime.append(opportunity.find("span", class_ = "date").get('data-ends-at'))
        except:
            print("inconsistent panel")

    df['name'] = opportunity_names
    df['link'] = opportunity_link
    df['image'] = opportunity_image
    df['tags'] = opportunity_tags
    df["start"] = opportuity_starttime
    df['end'] = opportuity_endtime

    data = df.to_dict(orient="index")

    return data
