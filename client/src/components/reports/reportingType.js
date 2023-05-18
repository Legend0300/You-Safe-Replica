import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import Nav from '../common/Nav';
import Divider from '@mui/material/Divider';
import SimpleBottomNavigation from '../common/Bottom';
import { Box } from '@mui/system';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  link: {
    color: '#000000de',
    display: 'flex',
    width: '100%',
    textDecoration: 'none',
    justifyContent: 'space-between',
    aligntems: 'center',
  },
}));

const ChecklistMap = ({ checklist }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" component="label" htmlFor="form-name">
        Form Name:
      </Typography>
      <List>
        {checklist.map((checklist) => (
          <ListItem key={checklist.id}>
            <Link
              to={`/checklist/${checklist.formName}`}
              className={classes.link}
            >
              <ListItemText primary={checklist.formName} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

const ReportingTypePage = () => {
  const reportingTypes = [
    { name: 'Safe/Unsafe Acts', path: '/safeusafereport' },
    { name: 'Hazard Reporting', path: '/hazardreport' },
    { name: 'Incident Reporting', path: '/incidentreport' },
    { name: 'Deep Compliance Reporting', path: '/dca' },
    { name: 'Planned Inspection', path: '/planned-inspection' },
    { name: 'Safety Action Meeting (SAM)', path: '/safetyactionmeeting' },
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
    <Box sx={{height: '100vh',display:'flex', flexDirection:'column', justifyContent: 'space-between'}}>
      <Box sx={{ height: '100%' }}>
        <Nav />
        <Typography variant="h4">Select Reporting Type</Typography>
        <List disablePadding>
          {reportingTypes.map((type) => (
            <div>
              <ListItem key={type.name}>
                <Link to={`/newreport${type.path}`} className={classes.link}>
                  <ListItemText primary={type.name} />{' '}
                  <ArrowForwardIosIcon fontSize="medium" />
                </Link>
              </ListItem>
              <Divider />
            </div>
          ))}
        </List>
      </Box>
      <SimpleBottomNavigation />
    </Box >
  );
};

export default ReportingTypePage;
