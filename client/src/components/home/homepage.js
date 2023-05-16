import React, { useState, useEffect } from 'react';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Avatar, Button, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { LockOutlined, EmailOutlined, PersonOutlined } from '@material-ui/icons';
import Nav from '../common/Nav';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#000000', // Black color for buttons
    },
    secondary: {
      main: '#ffc107', // Yellow background color
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '1rem',
    background: "#ffc107", // Set yellow background color
  },
  avatar: {
    width: '100px',
    height: '100px',
    marginBottom: '1rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch("http://localhost:4000/api/user/642c66b7e819bc86120413d6");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        const body = await response.json();
        setUser(body);
      } else {
        const body = await response.text();
        console.log(`Response body: ${body}`);
      }
    };
    getUser().catch((err) => console.log(err));
  }, []);

  const url = "";

  useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div className={classes.root}>
        <Avatar src={url} className={classes.avatar} />
        <List>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <PersonOutlined />
            </ListItemIcon>
            <ListItemText primary={user.name} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <EmailOutlined />
            </ListItemIcon>
            <ListItemText primary={user.email} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LockOutlined />
            </ListItemIcon>
            <ListItemText primary={user.accountType} />
          </ListItem>
          <ListItem className={classes.listItem}>
            <ListItemIcon>
              <LockOutlined />
            </ListItemIcon>
            <ListItemText primary={user.employeeId} />
          </ListItem>
        </List>
        <Button variant="contained" color="primary" href="/change-password">
          Change Password
        </Button>
        <Button variant="contained" color="primary" href="/contact-us">
          Contact us
        </Button>
        <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
          Refresh application
        </Button>
        <Button variant="contained" color="primary" href="/logout">
          Logout
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;
