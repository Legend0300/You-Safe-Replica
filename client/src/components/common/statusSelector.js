import React from "react";
import { FormControl, InputLabel, Select, MenuItem, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// Create a custom MUI theme with yellow and white colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffff00", // yellow
    },
    background: {
      default: "#ffffff", // white
    },
  },
});

function StatusSelector({ status, setStatus }) {
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel htmlFor="status">Status</InputLabel>
        <Select style={{ width: '100px' }} id="status" value={status} onChange={handleStatusChange}>
          <MenuItem value="" disabled>
            Select a status
          </MenuItem>
          <MenuItem value="Enabled">Enabled</MenuItem>
          <MenuItem value="Disabled">Disabled</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

export default StatusSelector;
