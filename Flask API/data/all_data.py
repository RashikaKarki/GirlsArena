from data.powertofly import getdata_powertofly
from data.hackerearth import getdata_hackerearth
from data.youthop import getdata_youthop
from data.tfidf import find_keyword
import pandas as pd
import datetime

'''
    Formats all the data into dict format
'''
def makedict(all_data):
    df = pd.DataFrame()
    df['name'] = all_data["name"]
    df['link'] = all_data["link"]
    df['image'] = all_data["image"]
    df["tags"] = all_data["tags"]
    df["start"] = all_data["start"]
    df["end"] = all_data["end"]
    df['start'] = df.loc[:,'start'].apply(lambda x: x.strftime("%m/%d/%Y, %H:%M:%S"))
    df['end'] = df.loc[:,'end'].apply(lambda x: x.strftime("%m/%d/%Y, %H:%M:%S"))
    df['platform'] = all_data["platform"]
    df["additional tags"] = find_keyword(df)
    data = df.to_dict(orient="index")
    return data


'''
    Collects data from all the sources and merge it
'''

def collect_data(status, search):
    #initialize variables for data collection
    all_data = dict()
    #calling data from different sources
    #powertofly
    data_powertofly = getdata_powertofly(status, search)
    all_data["name"] = data_powertofly[0]
    all_data["link"] = data_powertofly[1]
    all_data["image"] = data_powertofly[2]
    all_data["tags"] = data_powertofly[3]
    all_data["start"] = data_powertofly[4]
    all_data["end"] = data_powertofly[5]
    all_data["platform"] = ["powertofly"]*len(data_powertofly[0])  
    #returning formatted data
    return makedict(all_data)
    
    

    