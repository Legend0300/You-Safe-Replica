import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

export default function SimpleBottomNavigation() {
  return (
    <Box sx={{ width: '100%', display: { xs: 'block', md: 'none' } }}>
      <BottomNavigation showLabels sx={{display:'flex', justifyContent: 'space-evenly', justifyItems: 'center'}}>
        <Link to="/reports">
          <BottomNavigationAction
            showLabel="true"
            label="My Reportings"
            icon={<CalendarMonthIcon />}
          />
        </Link>

        <Link to="/home">
          <BottomNavigationAction
            showLabel="true"
            label="My Profile"
            icon={<PersonIcon />}
          />
        </Link>
      </BottomNavigation>
    </Box>
  );
}
