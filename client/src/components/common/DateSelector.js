import React, { useState } from 'react';
import { createTheme } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// Create a custom MUI theme with yellow and white colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff00', // yellow
    },
    background: {
      default: '#ffffff', // white
    },
  },
});

function DateSelector({ selectedDate, onDateChange }) {
  const [value, setValue] = React.useState();
  const handleDateChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DatePicker
      label="Date"
      value={value}
      onChange={handleDateChange}
      color='warning'
    />
</LocalizationProvider>
  );
}

export default DateSelector;
