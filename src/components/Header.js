import React, { useState, useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import img from "../assets/logo.png";

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: "white",
    color: "black",
    margin: "0",
    width: "100vw",
  },
  drawer: {
    width: "40vw",
  },
  logo: {
    height: "6em",
    backgroundColor: "red",
    [theme.breakpoints.down("md")]: {
      height: "4.5em",
    },
    [theme.breakpoints.down("xs")]: {
      height: "4em",
    },
    // width:"180px"
  },
}));

export default function Header({ value, setValue }) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [navbar, setNavBar] = useState(true);
  const [openDrawer, setopenDrawer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    if (window.location.pathname === "/") {
      setValue(0);
    } else if (window.location.pathname === "/bookmark") setValue(1);
    else if (window.location.pathname === "/subscribe") setValue(2);
  }, []);

  const tab = (
    <>
      <Tabs value={value} onChange={handleChange} selected={1}>
        <Tab
          onClick={() => {
            setValue(0);
          }}
          label={
            <span
              className={navbar ? classes.tabLabel : classes.tabLabelActive}
            >
              Home
            </span>
          }
          component={Link}
          to="/"
        />

        <Tab
          onClick={() => {
            setValue(1);
          }}
          label={
            <span
              className={navbar ? classes.tabLabel : classes.tabLabelActive}
            >
              Bookmarks
            </span>
          }
          component={Link}
          to="/bookmark"
        />
        <Tab
          onClick={() => {
            setValue(2);
          }}
          label={
            <span
              className={navbar ? classes.tabLabel : classes.tabLabelActive}
            >
              Subscribe
            </span>
          }
          component={Link}
          to="/subscribe"
        />
      </Tabs>
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        anchor="right"
        open={openDrawer}
        onClose={() => {
          setopenDrawer(false);
        }}
        onOpen={() => {
          setopenDrawer(true);
        }}
      >
        <List
          component="nav"
          disablePadding
          aria-label="main folders"
          disableGutters
          className={classes.drawer}
        >
          <ListItem>
            <IconButton>
              <CloseIcon
                onClick={() => {
                  setopenDrawer(false);
                }}
                color="primary"
                className={[classes.profileIcon, classes.closeIcon]}
              />
            </IconButton>
          </ListItem>
          <ListItem
            className={classes.list}
            onClick={() => {
              setopenDrawer(false);
            }}
            button
            component={Link}
            to="/"
            alignItems="center"
          >
            <ListItemText
              className={classes.listText}
              color="primary"
              disableTypography
            >
              Home
            </ListItemText>
          </ListItem>

          <ListItem
            className={classes.list}
            onClick={() => {
              setopenDrawer(false);
            }}
            button
            component={Link}
            to="/bookmark"
          >
            <ListItemText className={classes.listText} disableTypography>
              Bookmarks
            </ListItemText>
          </ListItem>
          <ListItem
            className={classes.list}
            onClick={() => {
              setopenDrawer(false);
            }}
            button
            component={Link}
            to="/subscribe"
          >
            <ListItemText className={classes.listText} disableTypography>
              Subscribe
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>

      <MenuIcon
        className={classes.drawerIcon}
        onClick={() => {
          setopenDrawer(!openDrawer);
        }}
        style={{ marginLeft: "auto", marginRight: -1 }}
      />
    </>
  );
  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar style={{ padding: 0, margin: 0 }}>
          <Link
            to="/"
            onClick={() => {
              setValue(5);
            }}
            className={classes.logocontainer}
          >
            <img alt="Geeky girls" src={img} className={classes.logo} />
          </Link>
          <div style={{ marginLeft: "auto", marginRight: "-1" }}>
            {matches ? drawer : tab}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
