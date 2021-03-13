# Flask API

The API gathers upcoming opportunities from various website and filters those opportunities that are more centered around women in tech. So far the API gathers data from:
- [Power to fly](https://powertofly.com/events/)
- [Hackerearth](https://www.hackerearth.com/challenges/?filters=competitive%2Chackathon%2Chiring%2Cuniversity)
- [MLH Hackathon](https://mlh.io/seasons/2021/events)
- [Youthop](https://www.youthop.com/browse)
- [Google #IamRemarkable](https://events.withgoogle.com/iamremarkable-workshops-iwd-2021/registrations/new/)


## How to run Flask API?
- Step 1:
Clone the repo
- Step 2: 
Go to folder Flask API
- Step 3:
Install all the packages: `pip install -r requirements.txt`
- Step 5:

```
set FLASK_APP=server.py
flask run
```

The server will run on port `5000`


## How to call the Flask API?

- **API Call:** `http://127.0.0.1:5000/opportunities` 
- **Request Method:** get 
- **Returns:** JSON
'''
"results": {
    "timestamp": 1615610999.132,
    "ongoing": [
      {
        "name": ".....",
        "url": ".....",
        "platform": "......",
        "startTime": .......,
        "endTime": ......
      },
'''


