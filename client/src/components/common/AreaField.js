import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  const [selectedArea, setSelectedArea] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/api/area')
      .then((response) => response.json())
      .then((data) => setAreas(data))
      .catch((error) => console.error(error));
  }, []);

  const handleAreaChange = (event) => {
    const selectedAreaId = event.target.value;
    const selectedAreaData = areas.find((area) => area._id === selectedAreaId);
    setSelectedArea(selectedAreaId);
    onSelectArea(selectedAreaData.name);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel id="area-select-label">Area:</InputLabel>
        <Select
          style={{ minWidth: '200px', width: '350px'}}
          labelId="area-select-label"
          id="area-select"
          value={selectedArea}
          onChange={handleAreaChange}
          label="Area"
        >
          <MenuItem value="">
            <em>Select an area</em>
          </MenuItem>
          {areas.length > 0 ? (
            areas.map((area) => (
              <MenuItem key={area._id} value={area._id}>
                {area.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value="" disabled>
              Loading areas...
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default AreaField;
