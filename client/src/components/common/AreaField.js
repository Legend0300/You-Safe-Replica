import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const AreaField = ({ onSelectArea }) => {
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState({ name: '' });

  useEffect(() => {
    fetch('http://localhost:4000/api/area')
      .then((response) => response.json())
      .then((data) => setAreas(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAreaChange = (event) => {
    const selectedAreaData = areas.find((area) => area._id === event.target.value);
    setSelectedArea(selectedAreaData.name);
    onSelectArea(selectedAreaData.name);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel id="area-select-label">Area:</InputLabel>
        <Select
        style={{ width: '100%' }}
          labelId="area-select-label"
          id="area-select"
          value={selectedArea.name}
          onChange={handleAreaChange}
          label="Area"
        >
          <MenuItem value="">
            <em>Select an area</em>
          </MenuItem>
          {areas.map((area) => (
            <MenuItem key={area._id} value={area._id}>
              {area.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default AreaField;
