import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

// Create a custom MUI theme with yellow and white colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffb300', // yellow
    },
    background: {
      default: '#ffffff', // white
    },
  },
});

const DepartmentField = ({ onSelectDepartment }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });

  useEffect(() => {
    fetch(`http://localhost:4000/api/department`)
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error(error));
  }, []);

  const handleDepartmentChange = (event) => {
    const selectedDepartmentData = departments.find((department) => department._id === event.target.value);
    setSelectedDepartment(selectedDepartmentData.department);
    onSelectDepartment(selectedDepartmentData.department);
    console.log(selectedDepartmentData.department);
  };

// ...

return (
  <ThemeProvider theme={theme}>
    <FormControl>
      <InputLabel id="department-select-label" >Department:</InputLabel>
      <Select
        style={{ minWidth: '200px', width: '350px'}}
        labelId="department-select-label"
        id="department-select"
        value={selectedDepartment.department}
        onChange={handleDepartmentChange}
        label="Department"
      >
        <MenuItem value="null">
          <em>Select a department</em>
        </MenuItem>
        {departments.length > 0 ? (
          departments.map((department) => (
            <MenuItem key={department._id} value={department._id}>
              {department.department}
            </MenuItem>
          ))
        ) : (
          <MenuItem value="" disabled>
            Loading departments...
          </MenuItem>
        )}
      </Select>
    </FormControl>
  </ThemeProvider>
);

// ...

};

export default DepartmentField;
