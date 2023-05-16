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

const UserType = ({ userType, onUserTypeChange }) => {
  const handleUserTypeChange = (event) => {
    onUserTypeChange(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel htmlFor="userType">User Type</InputLabel>
        <Select
        style={{ width: '120px' }}
          id="userType"
          name="userType"
          value={userType}
          onChange={handleUserTypeChange}
        >
          <MenuItem value="">Select User Type</MenuItem>
          <MenuItem value="employee">Employee</MenuItem>
          <MenuItem value="visitor">Visitor</MenuItem>
          <MenuItem value="admin">Admin</MenuItem>
          <MenuItem value="areaManager">Area Manager</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default UserType;
