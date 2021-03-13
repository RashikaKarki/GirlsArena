import React, { useState, useContext } from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
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

const useStyles = makeStyles((theme) => ({
  box: {
    paddingTop: "10vh",
    [theme.breakpoints.down("md")]: {
      paddingTop: "6vh",
    },
  },
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

const Bookmark = () => {
  const classes = useStyles();
  const theme = useTheme();
  const { bookmark } = useContext(BookmarkContext);
  return (
    <div className={classes.box}>
      <List>
        {bookmark.map(({ d, index }) => (
          <div>
            <ListItem key={index}>
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
            </ListItem>
            <Divider inset={true} />
          </div>
        ))}
      </List>
    </div>
  );
};
export default Bookmark;
