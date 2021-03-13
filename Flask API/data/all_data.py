from data.powertofly import getdata_powertofly
from data.hackerearth import getdata_hackerearth
from data.youthop import getdata_youthop
import pandas as pd

'''
    Formats all the data into dict format
'''
def makedict(all_data):
    df = pd.DataFrame()
    df['name'] = all_data["name"]
    df['link'] = all_data["link"]
    df['image'] = all_data["image"]
    df['tags'] = all_data["tags"]
    df["start"] = all_data["start"]
    df['start'] = df.loc[:,'start'].apply(lambda x: x.strftime("%m/%d/%Y, %H:%M:%S"))
    df['end'] = all_data["end"]
    df['end'] = df.loc[:,'end'].apply(lambda x: x.strftime("%m/%d/%Y, %H:%M:%S"))
    df['platform'] = all_data["platform"]
    data = df.to_dict(orient="index")
    return data


'''
    Collects data from all the sources and merge it
'''

def collect_data():
    #initialize variables for data collection
    all_data = dict()
    #calling data from different sources
    #powertofly
    data_powertofly = getdata_powertofly()
    all_data["name"] = data_powertofly[0]
    all_data["link"] = data_powertofly[1]
    all_data["image"] = data_powertofly[2]
    all_data["tags"] = data_powertofly[3]
    all_data["start"] = data_powertofly[4]
    all_data["end"] = data_powertofly[5]
    all_data["platform"] = ["powertofly"]*len(data_powertofly[0])
    #hackerearth
    data_hackerearth = getdata_hackerearth()
    all_data["name"].extend(data_hackerearth[0])
    all_data["link"].extend(data_hackerearth[1])
    all_data["image"].extend(data_hackerearth[2])
    all_data["tags"].extend(data_hackerearth[3])
    all_data["start"].extend(data_hackerearth[4])
    all_data["end"].extend(data_hackerearth[5])
    all_data["platform"].extend(["hackerearth"]*len(data_hackerearth[0]))
    #youthop
    data_youthop = getdata_youthop()
    all_data["name"].extend(data_youthop[0])
    all_data["link"].extend(data_youthop[1])
    all_data["image"].extend(data_youthop[2])
    all_data["tags"].extend(data_youthop[3])
    all_data["start"].extend(data_youthop[4])
    all_data["end"].extend(data_youthop[5])
    all_data["platform"].extend(["youthop"]*len(data_youthop[0]))    
    #returning formatted data
    return makedict(all_data)
    
    

    