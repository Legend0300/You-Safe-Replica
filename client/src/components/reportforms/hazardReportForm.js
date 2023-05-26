import React, { useState, useEffect } from 'react';
import DepartmentField from '../common/DepartmentField';
import AreaField from '../common/AreaField';
import DateSelector from '../common/DateSelector';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Typography } from '@mui/material';
import { spacing } from '@mui/system';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@mui/material/InputAdornment';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
} from '@material-ui/core';
import Box from '@mui/material/Box';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Input from '@mui/material/Input';

const HazardReportingForm = () => {
  const [reportedStatus, setReportedStatus] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [managers, setManagers] = useState([]);
  const [photo, setPhoto] = useState(null);
  const [time, setTime] = useState('');

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffb300', // Yellow color
      },
      background: {
        default: '#ffffff', // White color
      },
    },
  });

  useEffect(() => {
    const fetchManagers = async () => {
      console.log('fetching managers');
      const response = await fetch('http://localhost:4000/api/areaManager');
      const data = await response.json();
      setManagers(data);
    };
    fetchManagers();
  }, []);

  const handleSelectDepartment = (selectedDepartment) => {
    setSelectedDepartment(selectedDepartment);
    console.log(selectedDepartment);
    // do something with the selected department data
  };

  const handleResponsibilityChange = (event) => {
    setResponsibility(event.target.value);
  };

  const handleSelectArea = (selectedArea) => {
    setSelectedArea(selectedArea);
  };

  const handleStatusChange = (newStatus) => {
    setReportedStatus(newStatus);
  };

  const handleReportDateChange = (event) => {
    setReportDate(event);
    console.log(event);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const response = await fetch('http://localhost:4000/api/hazardreport', {
        method: 'POST',
        body: {
          department: selectedDepartment,
          area: selectedArea,
          reportedStatus,
          endDate: reportDate,
          description: description,
          photos: photos,
          responsibility: responsibility,
          reportDate: Date.now()
        },
      });
      const data = await response.json();
      console.log(data); // Handle the response from the backend
      // Reset form fields
      setSelectedDepartment('');
      setSelectedArea('');
      setReportedStatus('');
      setReportDate('');
      setDescription('');
      setPhotos('');
      setResponsibility('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      boxShadow: '0px 0px 20px 0px rgba(0, 0, 0, 0.1)',
    },
    formInput: {
      marginBottom: theme.spacing(2),
    },
    formLabel: {
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
    },
    buttonGroup: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(2),
      width: '100%',
    },
    button: {
      marginRight: theme.spacing(1),
    },
  }));

  const classes = useStyles();

  const [value, setValue] = React.useState();

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'background.paper',
          p: 1,
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <Typography
            variant="h3"
            sx={{ marginBottom: 4, textAlign: 'center' }}
          >
            Hazard Reporting
          </Typography>{' '}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginBottom: '1rem',
              flexDirection: 'column',
            }}
          >
            <AreaField onSelectArea={handleSelectArea} />
            <DepartmentField onSelectDepartment={handleSelectDepartment} />
            <TextField
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              multiline
              rows={4}
              label="Description"
              color="warning"
              style={{ marginBottom: '1rem' }}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              p: 1,
              gap: '1rem',
              marginBottom: '1rem',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <DateSelector
              selectedDate={reportDate}
              onDateChange={handleReportDateChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <TimePicker
                label="Time"
                value={value}
                onChange={(newValue) => setValue(newValue)}
                color="warning"
              />
            </LocalizationProvider>
          </Box>
          <handleStatusChange
            setReportedStatus={reportedStatus}
            onChange={handleStatusChange}
          />
         
            <Input
              type="file"
              id="photos"
              value={photos}
              onChange={(event) => setPhotos(event.target.value)}
              endAdornment={
                <InputAdornment position="end">
                  <CameraAltIcon sx={{ fontSize: 40 }} />
                </InputAdornment>
              }
              label="Add photo"
            />
          
          <FormControl sx={{ mt: 3, mb: 3, display: 'flex' }}>
            <InputLabel id="demo-simple-select-helper-label">
              Responsibility
            </InputLabel>
            <Select
              value={responsibility}
              label="Responsibility"
              onChange={handleResponsibilityChange}
              variant="outlined"
            >
              <MenuItem value="">Select Manager</MenuItem>
              {managers.map((manager) => (
                <MenuItem key={manager.id} value={manager.fullName}>
                  {manager.fullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
};

export default HazardReportingForm;
