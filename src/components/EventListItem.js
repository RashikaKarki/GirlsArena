import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Chip from '@material-ui/core/Chip';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import EventIcon from '@material-ui/icons/Event';
import Typography from '@material-ui/core/Typography';

import AddToCalendar from 'react-add-to-calendar';
let event = {
    title: 'Sample Event',
    description: 'This is the sample event provided as an example only',
    location: 'Portland, OR',
    startTime: '2016-09-16T20:15:00-04:00',
    endTime: '2016-09-16T21:45:00-04:00'
}

const useStyles = makeStyles((theme) => ({
    primary:{
        marginTop:'2vh'
    },
    secondary:{
    margin:'1vh 1vw'
},
secondaryInner:{
    margin:'0 1vw',
}
}))

const data = [
    {
        "name":"How I Moved My Career Forward Despite a Chronic Illness",
        "link":"https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
        "image":"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
        "tags":"Chat & Learn",
        "start":"2021-03-15 17:00:00Z",
        "end":"2021-03-15 18:00:00Z",
        "platform":"powertofly"
    },
    {
        "name":"How I Moved My Career Forward Despite a Chronic Illness",
        "link":"https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
        "image":"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
        "tags":"Chat & Learn",
        "start":"2021-03-15 17:00:00Z",
        "end":"2021-03-15 18:00:00Z",
        "platform":"powertofly"
    },
    {
        "name":"How I Moved My Career Forward Despite a Chronic Illness",
        "link":"https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
        "image":"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
        "tags":"Chat & Learn",
        "start":"2021-03-15 17:00:00Z",
        "end":"2021-03-15 18:00:00Z",
        "platform":"powertofly"
    },
    {
        "name":"How I Moved My Career Forward Despite a Chronic Illness",
        "link":"https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
        "image":"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
        "tags":"Chat & Learn",
        "start":"2021-03-15 17:00:00Z",
        "end":"2021-03-15 18:00:00Z",
        "platform":"powertofly"
    },
    {
        "name":"How I Moved My Career Forward Despite a Chronic Illness",
        "link":"https://events.powertofly.com/events/details/powertofly-chat-learn-presents-how-i-moved-my-career-forward-despite-a-chronic-illness/",
        "image":"https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_face,h_400,q_auto:good,w_400/v1/gcs/platform-data-powertofly/events/Bevy%2520CL%2520thumbnails%2520v2%2520%25284%2529.png",
        "tags":"Chat & Learn",
        "start":"2021-03-15 17:00:00Z",
        "end":"2021-03-15 18:00:00Z",
        "platform":"powertofly"
    },
]
const EventListItem = ()=>{
    const classes = useStyles();
    const theme = useTheme();
        return(
        <div>
            <List>
                {
                    data.map(d =>(
                        <div>
                        <ListItem>
                             <ListItemAvatar>
                                <Avatar
                                    alt={d.platform}
                                    src={d.image}
                                />
                            </ListItemAvatar>
                            <ListItemText primary={
                                                <div className={classes.primary}>
                                                {d.name}
                                                </div>
                                            }
                                            secondary={
                                                <div className={classes.secondary}>
                                                <Typography className={classes.secondaryInner}> From: {d.start}</Typography>
                                                <Typography className={classes.secondaryInner}> To: {d.end}</Typography>
                                                <Chip variant="outlined" size="small" label={d.tags} className={classes.secondaryInner}/>
                                                <Chip color = "primary" size="small" label={d.platform} className={classes.secondaryInner}/>
                                                </div>
                                            }
                            />
                            <ListItemSecondaryAction>

                                <BookmarkBorderIcon className={classes.bookmarkIcon} />
                                <EventIcon className={classes.eventIcon} />
                                <AddToCalendar event={event} />
                            </ListItemSecondaryAction>
                        </ListItem>
                        <Divider inset={true} />
                        </div>
                    ))
                }
            </List>
             
        <AddToCalendar event={event} />
        </div>
        )
}
export default EventListItem;
