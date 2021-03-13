from bs4 import BeautifulSoup
import csv
import pandas as pd
import os
import time
import requests
import cssutils
from dateutil import parser
from datetime import datetime

'''
    Clean date time
'''
def cleantime(date_time):
    date = parser.parse(date_time)
    return date

'''
    Scrapes the website and collects the data
'''
def getdata_powertofly():
    url = "https://powertofly.com/events/"

    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')

    opportunitiesList = soup.find(id = "layout-events").find_all("div", class_ = "panel")

    opportunity_names = []
    opportunity_link = []
    opportunity_image = []
    opportunity_tags = []
    opportunity_starttime = []
    opportunity_endtime = []

    for opportunity in opportunitiesList:
        try:
            name = opportunity.find("h5").text
            link = opportunity.find("a").get('href')
            image = opportunity.find("img").get('src')
            tags = opportunity.find("p", class_ = "item-meta-infos").text.strip()
            start = cleantime(opportunity.find("span", class_ = "date").get('data-starts-at'))
            end = cleantime(opportunity.find("span", class_ = "date").get('data-ends-at'))
            opportunity_names.append(name)
            opportunity_link.append(link)
            opportunity_image.append(image)
            opportunity_tags.append(tags)
            opportunity_starttime.append(start)
            opportunity_endtime.append(end)
        except:
            print("invalid format") 
        

    return [opportunity_names, opportunity_link, opportunity_image, opportunity_tags, opportunity_starttime, opportunity_endtime]



    
