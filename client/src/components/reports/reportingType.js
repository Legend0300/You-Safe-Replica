import React , {useState , useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Outlet, Routes } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import Nav from '../common/Nav';

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

const ChecklistMap = ({ checklist }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="label" htmlFor="form-name">Form Name:</Typography>
      <List>
        {checklist.map((checklist) => (
          <ListItem key={checklist.id}>
            <Link to={`/checklist/${checklist.formName}`} className={classes.link}>
              <ListItemText primary={checklist.formName} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

const ReportingTypePage = () => {
  const reportingTypes = [
    { name: 'Safe/Unsafe Acts', path: '/safeusafereport' },
    { name: 'Hazard Reporting', path: '/hazardreport' },
    { name: 'Incident Reporting', path: '/incidentreport' },
    { name: 'Deep Compliance Reporting', path: '/dca' },
    { name: 'Planned Inspection', path: '/planned-inspection' },
    { name: 'Safety Action Meeting (SAM)', path: '/safetyactionmeeting' }
  ];
  const classes = useStyles();

  return (
    <div>
      <SelectPage reportingTypes={reportingTypes} />
    </div>
  );
};

const SelectPage = ({ reportingTypes }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Nav />

      <Typography variant="h1">Select Reporting Type</Typography>
      <List>
        {reportingTypes.map(type => (
          <ListItem key={type.name}>
            <Link to={`/newreport${type.path}`} className={classes.link}>
              <ListItemText primary={type.name} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ReportingTypePage;
