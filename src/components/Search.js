import React, { useState } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import {  makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({ 
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '30vw',
        [theme.breakpoints.down("md")]: {
            width: "50vw",
          },
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
}))

const Search = ()=>{
    const classes = useStyles();
    const theme = useTheme();

return(
    <Paper component="form" className={classes.root}>
    <InputBase
      className={classes.input}
      placeholder="Search Here"
      inputProps={{ 'aria-label': 'search' }}
    />
    <IconButton type="submit" className={classes.iconButton} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
)
}
export default Search;