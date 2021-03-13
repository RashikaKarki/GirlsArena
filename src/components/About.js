import React, { useState } from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

import EventListItem from './EventListItem';
const useStyles = makeStyles((theme) => ({
    box:{
        paddingTop:'10vh',
        [theme.breakpoints.down("md")]: {
            paddingTop:'6vh'
        }
    },
}))


const About = ()=>{
    const classes = useStyles();
    const theme = useTheme();

return(
    
    <div className={classes.box}>
        
       
    </div>
)
}
export default About;