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
    date = parser.parse(date_time).tz_convert(None)  
    return date

'''
    Filter the data to see if they are women specific event
'''
def filterdata(info):
    keywords = ["Women", "Girl", "Diversity", "Female"]
    for i in keywords:
        if i in info:
            return True
    return False


'''
    Scrapes the website and collects the data
'''

def getdata_hackerearth():
    url = "https://www.hackerearth.com/challenges/?filters=competitive%2Chackathon%2Chiring%2Cuniversity"

    source = requests.get(url).text
    soup = BeautifulSoup(source, 'lxml')

    opportunitiesList = soup.find(id = "challenge-container").find("div", class_ = "upcoming challenge-list").find_all("div", class_ = "challenge-card-modern")

    opportunity_names = []
    opportunity_link = []
    opportunity_image = []
    opportunity_tags = []
    opportunity_starttime = []
    opportunity_endtime = []

    for opportunity in opportunitiesList:
        try:
            name = opportunity.find("span", class_ = "challenge-list-title challenge-card-wrapper").text
            link = opportunity.find("a").get("href")
            #getting image from style
            div_style = opportunity.find("div", class_ = "event-image")['style']
            style = cssutils.parseStyle(div_style)
            image = style['background-image'].replace('url(', '').replace(')', '')
            tags=opportunity.find("div", class_ = "challenge-type").text.strip()
            #To scrape start and end date
            source = requests.get(link).text
            soup = BeautifulSoup(source, 'lxml')
            try:
                starttime = soup.find("div", class_ = "start-time-block"). find_all("div")[1].text
                endtime = soup.find("div", class_ = "end-time-block"). find_all("div")[1].text
            except:
                starttime = soup.find("div", class_ = "event-timings"). find_all("span", class_ = "timing-text")[0].text
                endtime = soup.find("div", class_ = "event-timings"). find_all("span", class_ = "timing-text")[1].text
            start = cleantime(starttime)
            end = cleantime(endtime)
            #adding data to the list
            if filterdata(soup.find(id = "overview")):
                opportunity_names.append(name)
                opportunity_link.append(link)
                opportunity_image.append(image)
                opportunity_tags.append(tags)
                opportunity_starttime.append(start)
                opportunity_endtime.append(end)            
        except:
            print("inconsistent panel")

    return [opportunity_names, opportunity_link, opportunity_image, opportunity_tags, opportunity_starttime, opportunity_endtime]





