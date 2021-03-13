import React, { useState, useContext, useReducer, useEffect } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import axios from "axios";
import { BookmarkContext } from "../App";
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
var result1 = [];
var result2= [];
var result3 = [];
var finalresult = [];
const reducer = (key) => key + 1;
const useStyles = makeStyles((theme) => ({
  primary: {
    marginTop: "2vh",
    marginLeft: "2px",
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
  isBookmarkIcon: {
    color: "red",
    //fill:'black'
    // backgroundColor:'black'
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
const EventListItem = ({ label, ind, num }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("label", label);
  const fetchData = () => {
    setLoading(true);
    fetch("https://geekygirls-api.herokuapp.com/opportunities?status=ongoing")
      .then((response) => response.json())
      .then((data) => {
        setData(data);

        for (var i in data) result1.push(data[i]);

        console.log("result", result1);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
      const [data2, setData2] = useState([]);
    //  const [loading, setLoading] = useState(false);

      useEffect(() => {
        fetchData2();
      }, []);
      console.log("label", label);
      const fetchData2 = () => {
      //  setLoading(true);
        fetch(
          "https://geekygirls-api.herokuapp.com/opportunities?status=future"
        )
          .then((response) => response.json())
          .then((data2) => {
            setData(setData2);

            for (var i in data2) result2.push(data2[i]);

            console.log("result", result2);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          //  setLoading(false);
          });
      };
    if (label === "ongoing") {
        finalresult = result1;
    }
    else if(label==="future"){
        finalresult = result2;
    } else {
        finalresult = [];
    }

  const classes = useStyles();
  const theme = useTheme();
  const { setBookmark } = useContext(BookmarkContext);
  const [id, updateId] = useReducer(reducer, 0);

  const [checked, updateChecked] = useState(ind);

  const handleToggle = (value) => {
    console.log("in toggle", checked);
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    updateChecked(newChecked);

    if (num === 0) {
      localStorage.setItem("liveIndex", newChecked);
    } else if (num === 1) {
      localStorage.setItem("futureIndex", newChecked);
    } else if (num === 2) {
      localStorage.setItem("pastIndex", newChecked);
    }
  };

  function addBookmark(d) {
    setBookmark({
      d,
      id: id,
    });
    updateId();
  }
  return (
    <div>
      <List>
        {finalresult.map((d, index) => (
          <div>
            {console.log("index", index)}
            <ListItem onClick={() => window.open(d.link, "_blank")} key={index}>
              <ListItemAvatar>
                <Avatar
                  alt={d.platform}
                  src={d.image}
                  className={classes.large}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <div
                    className={classes.primary}
                    style={{ marginLeft: "24px" }}
                  >
                    {d.name}
                  </div>
                }
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
                <BookmarkBorderIcon
                  className={
                    checked.indexOf(index) !== -1
                      ? classes.isBookmarkIcon 
                      : classes.bookmarkIcon
                  }
                  onClick={() => {
                    handleToggle(index);
                    addBookmark(d);
                    console.log("index2",checked.indexOf(index));
                  }}
                />
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
