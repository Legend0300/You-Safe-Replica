import React, { useState, useEffect } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import LockIcon from '@mui/icons-material/Lock';
import PhoneIcon from '@mui/icons-material/Phone';
import RefreshIcon from '@mui/icons-material/Refresh';
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import jwt_decode from 'jwt-decode';
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

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
    maxWidth: '350px',
    margin: '0 auto',
    // padding: '1rem',
    //  // Set yellow background color
  },
  listItem: {
    marginBottom: '0.5rem',
  },
  emp: {
    background: '#ffc107',
  },
}));

const logout = () => {
  localStorage.removeItem('usertoken');
};

const HomePage = () => {
  const classes = useStyles();
  const [user, setUser] = useState({});

  useEffect(() => {
    const getUser = async () => {
      try {
        const token = localStorage.getItem('usertoken');
        const user1 = jwt_decode(token).user;
        console.log(user1);


        // const userData = await response.json();
        setUser(user1);
      } catch (error) {
        console.log(error);
      }
    };

    getUser();
  }, []);

  const url = ""


  useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Nav />
      <div className={classes.root}>
        <Card>
          <CardHeader
            avatar={
              <Avatar
                alt="Remy Sharp"
                src={url}
                className={classes.avatar}
                sx={{
                  width: 90,
                  height: 90,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
                }}
              />
            }
            title={user.name}
            titleTypographyProps={{ variant: 'h5', align: 'center' }}
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              background: '#ffc107',
              paddingBottom: 0,
            }}
          />
          <div className={classes.emp}>
            <Typography variant="subtitle1" align="center">
              {user.email}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Account Type : {user.accountType}
            </Typography>
            <Typography variant="subtitle1" align="center">
              Employee Id: {user.id}
            </Typography>
          </div>
          <List  disablePadding>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="/change-password">
                <LockIcon fontSize="medium" sx={{ marginRight: 1 }} />{' '}
                <ListItemText primary="Change Password" />{' '}
                <ArrowForwardIosIcon fontSize="medium" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="/contact-us">
                <PhoneIcon fontSize="medium" sx={{ marginRight: 1 }} />
                <ListItemText primary="Contact Us" />{' '}
                <ArrowForwardIosIcon fontSize="medium" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={() => window.location.reload()}>
                <RefreshIcon fontSize="medium" sx={{ marginRight: 1 }} />{' '}
                <ListItemText primary="Refresh application" />{' '}
                <ArrowForwardIosIcon fontSize="medium" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={logout} component="a" href="/login">
                <LogoutIcon fontSize="medium" sx={{ marginRight: 1 }} />{' '}
                <ListItemText primary="Logout" />{' '}
                <ArrowForwardIosIcon fontSize="medium" />
              </ListItemButton>
            </ListItem>
          </List>
        </Card>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;

