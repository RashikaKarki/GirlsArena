import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import EventListItem from './EventListItem';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
  },
  tabs:{
      backgroundColor:'#81d4fa',
      color:'white',
  },
  tab:{
      fontSize:'22px',
      fontFamily:'Arial',
      [theme.breakpoints.down("md")]: {
        fontSize:'18px'
    }
  }
}));

export default function Events({setLive}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  if(localStorage.getItem("liveIndex")===null){
    localStorage.setItem('liveIndex',[]);
  }
  if(localStorage.getItem("futureIndex")===null){
    localStorage.setItem('futureIndex',[]);
  }
  if(localStorage.getItem("pastIndex")===null){
    localStorage.setItem('pastIndex',[]);
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
          className={classes.tabs}
        >
          <Tab label="Ongoing" {...a11yProps(0)} className={classes.tab}/>
          <Tab label="Future" {...a11yProps(1)}  className={classes.tab}/>
          <Tab label="Past" {...a11yProps(2)}  className={classes.tab}/>
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {/* {console.log("Set Live ", setLive)} */}
          <EventListItem ind={localStorage.getItem('liveIndex')} num={0} label="ongoing"/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}> 
          <EventListItem ind={localStorage.getItem('futureIndex')} num={1} label="future"/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <EventListItem ind={localStorage.getItem('pastIndex')} num={2} label="past"/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}