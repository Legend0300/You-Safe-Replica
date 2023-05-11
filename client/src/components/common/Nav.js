import {
  BrowserRouter as Router,
  Switch,
  Link,
  Outlet,
  Routes,
  Route,
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

import React from "react";
const useStyles = makeStyles((theme) => ({
    root: {
      margin: theme.spacing(2),
    },
    link: {
      textDecoration: 'none',
      color: theme.palette.text.primary,
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  }));

function Nav() {
    const classes = useStyles();
  return (
    <div>
    <Typography variant="h1">Nav:</Typography>
    <nav>
      <Link to="/home" className={classes.link}>
        <Typography>Homepage</Typography>
      </Link>
      <br />
      <Link to="/newreport" className={classes.link}>
        <Typography>New Report</Typography>
      </Link>
      <Link to="/reports" className={classes.link}>
        <Typography>My Reports</Typography>
      </Link>
      
    </nav>
  </div>
  )
}

export default Nav;
