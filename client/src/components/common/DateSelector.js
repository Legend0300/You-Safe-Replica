import React, { useState } from 'react';
import { FormControl, InputLabel, Input, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';


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
  const handleDateChange = (e) => {
    onDateChange(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel  style={{ width: '100px' }}htmlFor="date">Date</InputLabel>
        <Input style={{ width: '100px' , marginTop: "50px"}} type="date" id="date" value={selectedDate} onChange={handleDateChange} />
      </FormControl>
    </ThemeProvider>
  );
}

export default DateSelector;
