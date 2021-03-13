import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";

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

const startDatetime = moment().utc().add(2, "days");
const endDatetime = startDatetime.clone().add(2, "hours");
const duration = moment.duration(endDatetime.diff(startDatetime)).asHours();
const event = {
  description:
    "Description of event. Going to have a lot of fun doing things that we scheduled ahead of time.",
  duration,
  endDatetime: endDatetime.format("YYYYMMDDTHHmmssZ"),
  location: "NYC",
  startDatetime: startDatetime.format("YYYYMMDDTHHmmssZ"),
  title: "Super Fun Event",
};

const useStyles = makeStyles((theme) => ({
  primary: {
    marginTop: "2vh",
  },
  secondary: {
    margin: "1vh 1vw",
  },
  secondaryInner: {
    margin: "0 1vw",
  },
}));

const data = [
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
const EventListItem = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div>
      <List>
        {data.map((d) => (
          <div>
            {console.log(d)}
            <ListItem>
              <ListItemAvatar>
                <Avatar alt={d.platform} src={d.image} />
              </ListItemAvatar>
              <ListItemText
                primary={<div className={classes.primary}>{d.name}</div>}
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
                    name: "Happy Hour",
                    details: "Let's go after work",
                    location: "Boston, MA",
                    startsAt: "2018-12-06T17:00:00-05:00",
                    endsAt: "2018-12-06T18:00:00-05:00",
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
