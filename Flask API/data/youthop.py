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
def getdata_youthop():
    url = "https://www.youthop.com/search/?s=tech"
    opportunity_names = []
    opportunity_link = []
    opportunity_image = []
    opportunity_tags = []
    opportunity_starttime = []
    opportunity_endtime = []
    for i in range(10):
        url_to_scrape = url + "&sf_paged=" + str(i + 1)
        source = requests.get(url_to_scrape).text
        soup = BeautifulSoup(source, 'lxml')
        try:
            opportunitiesList = soup.find(id = "response").find_all("article")
        except:
            break
        for opportunity in opportunitiesList:
            try:
                name = opportunity.find("h3", class_ = "post-title").text
                link = opportunity.find("a").get('href')
                image = opportunity.find("img").get('src')
                try:
                    tags = opportunity.find("span", class_ = "post-meta-funding").text.strip()
                except:
                    tags = ""
                start = None
                try:
                    end = cleantime(opportunity.find("span", class_ = "muted").find("span").get("content"))
                except:
                    continue
                if filterdata(name):
                    opportunity_names.append(name)
                    opportunity_link.append(link)
                    opportunity_image.append(image)
                    opportunity_tags.append(tags)
                    opportunity_starttime.append(start)

                    opportunity_endtime.append(end)
            except:
                print("invalid format") 
        

    return [opportunity_names, opportunity_link, opportunity_image, opportunity_tags, opportunity_starttime, opportunity_endtime]
