import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/reports" >
          <BottomNavigationAction
            label="My Reportings"
            icon={<CalendarMonthIcon />}
          />
          <Typography>My Reports</Typography>
        </Link>

        <Link to="/home" >
          <BottomNavigationAction label="My Profile" icon={<PersonIcon />} />
          <Typography>My Reports</Typography>
        </Link>
      </BottomNavigation>
    </Box>
  );
}
