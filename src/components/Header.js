import React,{ useState,useEffect } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import{ useMediaQuery,  useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import CloseIcon from "@material-ui/icons/Close";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
    appbar:{
        backgroundColor:'white',
        color:'black',
        margin:'auto'
    },
    drawer:{
        width:'40vw',
    },

}))

export default function Header({value, setValue}){
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  const [navbar,setNavBar] = useState(true);
  const [openDrawer, setopenDrawer] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(()=>{
    if (window.location.pathname === "/") {
        setValue(0);
      } 
      else if (window.location.pathname === "/about") setValue(1);
      else if (window.location.pathname === "/bookmark") setValue(2);
      else if (window.location.pathname === "/subscribe") setValue(3);
    }, []);

    const tab = (
        <>  
            <Tabs
                value = {value}
                onChange={handleChange}
                selected={2}
            >
                <Tab
                    onClick={() => {
                        setValue(0);
                    }}
                    label={<span className={navbar? classes.tabLabel: classes.tabLabelActive}>Home</span>}
                    component={Link}
                    to="/"
                 />
                 <Tab
                    onClick={() => {
                        setValue(1);
                    }}
                    label={<span className={navbar? classes.tabLabel: classes.tabLabelActive}>About Us</span>}
                    component={Link}
                    to="/about"
                 />
                 <Tab
                    onClick={() => {
                        setValue(2);
                    }}
                    label={<span className={navbar? classes.tabLabel: classes.tabLabelActive}>Bookmarks</span>}
                    component={Link}
                    to="/bookmark"
                 />
                 <Tab
                    onClick={() => {
                        setValue(3);
                    }}
                    label={<span className={navbar? classes.tabLabel: classes.tabLabelActive}>Subscribe</span>}
                    component={Link}
                    to="/subscribe"
                 />
            </Tabs>
        </>

    )

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
                        <ListItem >
                            <IconButton >
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
                            to="/about"
                        >
                            <ListItemText className={classes.listText} disableTypography>
                            ABOUT US
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
                 
                    <MenuIcon className={classes.drawerIcon} 
                     onClick={() => {
                        setopenDrawer(!openDrawer);
                        }}
                    style={{marginLeft: "auto",  marginRight: -1}}
                    />
        </>
    )
    return(
        <div>
            <AppBar className={classes.appbar}>
                <Toolbar>
                        {matches ? drawer : tab}
                </Toolbar>
            </AppBar>
        </div>
    )
}
