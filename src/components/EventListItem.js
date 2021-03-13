import React, { useState, useEffect } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import axios from "axios";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Chip from "@material-ui/core/Chip";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import EventIcon from "@material-ui/icons/Event";
import Typography from "@material-ui/core/Typography";
import AddToCalendar from "@culturehq/add-to-calendar";
import "@culturehq/add-to-calendar/dist/styles.css";
var result = [];
const useStyles = makeStyles((theme) => ({
  primary: {
        marginTop: "2vh",
      marginLeft:"2px"
  },
  secondary: {
    margin: "1vh 1vw",
  },
  secondaryInner: {
    margin: "0 1vw",
  },
  large: {
    height: "100px",
    width: "100px",
  },
}));

const data2 = [
  {
    name: "How I Moved My Career Forward Despite a Chronic Illness",
    link:
      "https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
    tags: "Chat & Learn",
    start: "2021-03-15 17:00:00Z",
    end: "2021-03-15 18:00:00Z",
    platform: "powertofly",
  },
  {
    name: "How I Moved My Career Forward Despite a Chronic Illness",
    link:
      "https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
    tags: "Chat & Learn",
    start: "2021-03-15 17:00:00Z",
    end: "2021-03-15 18:00:00Z",
    platform: "powertofly",
  },
  {
    name: "How I Moved My Career Forward Despite a Chronic Illness",
    link:
      "https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
    tags: "Chat & Learn",
    start: "2021-03-15 17:00:00Z",
    end: "2021-03-15 18:00:00Z",
    platform: "powertofly",
  },
  {
    name: "How I Moved My Career Forward Despite a Chronic Illness",
    link:
      "https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
    tags: "Chat & Learn",
    start: "2021-03-15 17:00:00Z",
    end: "2021-03-15 18:00:00Z",
    platform: "powertofly",
  },
  {
    name: "How I Moved My Career Forward Despite a Chronic Illness",
    link:
      "https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
    image:
      "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
    tags: "Chat & Learn",
    start: "2021-03-15 17:00:00Z",
    end: "2021-03-15 18:00:00Z",
    platform: "powertofly",
  },
];
const EventListItem = ({ label }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("label", label);
  const fetchData = () => {
    setLoading(true);
    fetch(`https://geekygirls-api.herokuapp.com/opportunities?status=${label}`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        for (var i in data) result.push(data[i]);

        console.log("result", result);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <List>
        {result.map((d) => (
          <div>
            {/* {console.log(d)} */}
            <ListItem>
              <ListItemAvatar>
                <Avatar
                  alt={d.platform}
                  src={d.image}
                  className={classes.large}
                />
              </ListItemAvatar>
              <ListItemText
                primary={<div className={classes.primary} style={{marginLeft:"24px"}}>{d.name}</div>}
                secondary={
                  <div className={classes.secondary}>
                    <Typography className={classes.secondaryInner}>
                      {" "}
                      From: {d.start}
                    </Typography>
                    <Typography className={classes.secondaryInner}>
                      {" "}
                      To: {d.end}
                    </Typography>
                    <Chip
                      variant="outlined"
                      size="small"
                      label={d.tags}
                      className={classes.secondaryInner}
                    />
                    <Chip
                      color="primary"
                      size="small"
                      label={d.platform}
                      className={classes.secondaryInner}
                    />
                  </div>
                }
              />
              <ListItemSecondaryAction>
                <BookmarkBorderIcon className={classes.bookmarkIcon} />
                {/* <EventIcon className={classes.eventIcon} /> */}
                <AddToCalendar
                  event={{
                                name: d.name,
                    details: d.tags,
                    location: d.link,
                    startsAt: d.start,
                    endsAt: d.end,
                  }}
                />
              </ListItemSecondaryAction>
            </ListItem>
            <Divider inset={true} />
          </div>
        ))}
      </List>
    </div>
  );
};
export default EventListItem;
