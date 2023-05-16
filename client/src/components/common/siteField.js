import React, { useEffect, useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';

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

const SiteField = ({ onSelectSite }) => {
  const [sites, setSites] = useState([]);
  const [selectedSite, setSelectedSite] = useState({ siteName: '' });

  useEffect(() => {
    fetch('http://localhost:4000/api/site')
      .then((response) => response.json())
      .then((data) => setSites(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSiteChange = (event) => {
    const selectedSiteData = sites.find(site => site._id === event.target.value);
    setSelectedSite(selectedSiteData.siteName);
    onSelectSite(selectedSiteData.siteName);
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl>
        <InputLabel htmlFor="site-select">Site</InputLabel>
        <Select
        style={{ width: '100px' }}
          value={selectedSite.siteName}
          onChange={handleSiteChange}
          inputProps={{
            name: 'site',
            id: 'site-select',
          }}
        >
          <MenuItem value="">
            <em>Select a site</em>
          </MenuItem>
          {sites.map((site) => (
            <MenuItem key={site._id} value={site._id}>
              {site.siteName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ThemeProvider>
  );
};

export default SiteField;
