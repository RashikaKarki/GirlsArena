import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

import Search from './Search';
import Events from './Events';
const useStyles = makeStyles((theme) => ({
    box:{
        paddingTop:'10vh',
        [theme.breakpoints.down("md")]: {
            paddingTop:'7vh'
        }
    },
    search:{
        padding:'3% 30%',
        backgroundColor:'#81d4fa',

    }
}))

const Home = ()=>{
    const classes = useStyles();
    const theme = useTheme();

return(
    
    <div className={classes.box}>
        <div className={classes.search}>
        <Search />
        </div>
        <div>
            <Events/>
        </div>
    </div>
)
}
export default Home;