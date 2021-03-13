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
```javascript
{
  "0": {
    "name": "How I Moved My Career Forward Despite a Chronic Illness",
    "link": "https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
    "image": "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
    "tags": "Chat & Learn",
    "start": "2021-03-15 17:00:00Z",
    "end": "2021-03-15 18:00:00Z",
    "platform": "powertofly"
  }
}
```


