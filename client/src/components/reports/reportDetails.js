import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import DateSelector from '../common/DateSelector';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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

const ReportDetails = ({ report, open, onOpenChange }) => {
  const [reports, setReport] = useState(null);

  // useEffect(() => {
  //    setReport(props.report);
  //  }, [props.report]);

  // setOpen = props
  console.log('props', reports);
  console.log('report.area', report.area);
  console.log('report.department', report.department);
  console.log('report.responsibility', report.responsibility);
  //console.log('report', handleViewDetails);

  const handleChange = () => {
    onOpenChange(false);
    console.log('change', onOpenChange);
    console.log('change', open);
  };

  const handleOpen = () => onOpenChange(true);
  const handleClose = () => onOpenChange(false);

  switch (report.type) {
    case 'hazard report':
      return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'background.paper',
                p: 4,
                minWidth: 300,
                maxWidth: 500,
                borderRadius: 4,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                
              }}
            >
              <Typography variant="h3" sx={{ marginBottom: 4 }}>
                Hazard Reporting
              </Typography>
              <FormControl sx={{ marginBottom: '1rem' }}>
                <InputLabel id="area-select-label">Area:</InputLabel>
                <Select
                  labelId="area-select-label"
                  id="area-select"
                  value={report.area}
                  label="Area"
                  disabled
                >
                  <MenuItem value={report.area}>{report.area}</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ marginBottom: '1rem' }}>
                <InputLabel id="department-select-label">
                  Department:
                </InputLabel>
                <Select
                  labelId="department-select-label"
                  id="department-select"
                  value={report.department}
                  label="Department"
                  disabled
                >
                  <MenuItem value={report.department}>
                    {report.department}
                  </MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="description"
                value={report.description}
                multiline
                rows={4}
                label="Description"
                color="warning"
                style={{ marginBottom: '1rem' }}
                disabled
              />

              <FormControl sx={{ marginBottom: '1rem' }}>
                <InputLabel id="responsibility-select-label">
                  Responsibility
                </InputLabel>
                <Select
                  labelId="responsibility-select-label"
                  id="responsibility-select"
                  value={report.responsibility}
                  label="Responsibility"
                  variant="outlined"
                  disabled
                >
                  <MenuItem value={report.responsibility}>
                    {report.responsibility}
                  </MenuItem>
                </Select>
              </FormControl>

              <Button
                onClick={handleChange}
                variant="contained"
                color="primary"
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      );
      break;
    case 'safe usafe report':
      return (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
            }}
          >
            <Box
              sx={{
                backgroundColor: 'background.paper',
                p: 4,
                minWidth: 300,
                maxWidth: 500,
                borderRadius: 4,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                
              }}
            >
              <Typography variant="h3" sx={{ marginBottom: 4 }}>
                Hazard Reporting
              </Typography>
              <FormControl sx={{ marginBottom: '1rem' }}>
                <InputLabel id="area-select-label">Area:</InputLabel>
                <Select
                  labelId="area-select-label"
                  id="area-select"
                  value={report.area}
                  label="Area"
                  disabled
                >
                  <MenuItem value={report.area}>{report.area}</MenuItem>
                </Select>
              </FormControl>

              <FormControl sx={{ marginBottom: '1rem' }}>
                <InputLabel id="department-select-label">
                  Department:
                </InputLabel>
                <Select
                  labelId="department-select-label"
                  id="department-select"
                  value={report.department}
                  label="Department"
                  disabled
                >
                  <MenuItem value={report.department}>
                    {report.department}
                  </MenuItem>
                </Select>
              </FormControl>

              <TextField
                id="description"
                value={report.description}
                multiline
                rows={4}
                label="Description"
                color="warning"
                style={{ marginBottom: '1rem' }}
                disabled
              />

              <FormControl sx={{ marginBottom: '1rem' }}>
                <InputLabel id="responsibility-select-label">
                  Responsibility
                </InputLabel>
                <Select
                  labelId="responsibility-select-label"
                  id="responsibility-select"
                  value={report.responsibility}
                  label="Responsibility"
                  variant="outlined"
                  disabled
                >
                  <MenuItem value={report.responsibility}>
                    {report.responsibility}
                  </MenuItem>
                </Select>
              </FormControl>

              <Button
                onClick={handleChange}
                variant="contained"
                color="primary"
              >
                Close
              </Button>
            </Box>
          </Box>
        </Modal>
      );
      break;
    case 'incident report':
     
      //   message = 'It\'s Wednesday, halfway through the week!';
      break;
    case 'DCA':
      //    message = 'It\'s Thursday, almost there!';
      break;
    case 'PI':
      //     message = 'It\'s Friday, weekend is near!';
      break;
    case 'safety action meeting':
      //    message = 'It\'s Saturday, go out and have some fun!';
      break;
    default:
    //    message = 'It\'s the weekend, time to relax!';
  }

  return (
    <div>
      <h1>Report Details</h1>
      <p>Department: {report.department ? report.department : 'NA'}</p>
      <p>Area: {report.area || 'NA'}</p>
      <p>Description: {report.description || 'NA'}</p>
      <p>Date: {report.endDate || 'NA'}</p>
      <div>
        <h3>Photos</h3>
        <ul>
          {/* {report.photos.map(photo => (
            <li key={photo.id}>
              <img src={photo.url} alt="Report Photo" />
            </li>
          ))} */}
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png"
              alt="Report Photo"
              width="40%"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportDetails;
