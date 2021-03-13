import React, { useState } from "react";

import { useMediaQuery, useTheme } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    box:{
        paddingTop:'10vh',
        [theme.breakpoints.down("md")]: {
            paddingTop:'6vh'
        }
    },
}))


const Bookmark = ()=>{    const classes = useStyles();
    const theme = useTheme();

return(
    
    <div className={classes.box}>
        Hello
    </div>
)
}
export default Bookmark;