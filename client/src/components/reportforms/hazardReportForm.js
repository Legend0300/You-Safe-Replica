import React, { useState } from "react";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import DateSelector from "../common/DateSelector";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { TextField, TextareaAutosize, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { spacing } from '@mui/system';

const HazardReportingForm = () => {
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState("");
  const [responsibility, setResponsibility] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [selectedArea, setSelectedArea] = useState("");

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffff00', // Yellow color
      },
      background: {
        default: '#ffffff', // White color
      },
    },
  });
  

  const handleSelectDepartment = (selectedDepartment) => {
    setSelectedDepartment(selectedDepartment);
    console.log(selectedDepartment);
    // do something with the selected department data
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

  const handleSubmit = (event) => {
    event.preventDefault();
    // perform submission logic here, e.g. make API call to save data

    console.log({
      selectedDepartment,
      selectedArea,
      reportedStatus,
      reportDate,
      description,
      photos,
      responsibility,
    });

    // reset form
    // setDepartments([]);
    // setAreas([]);
    // setReportedStatus('');
    // setReportDate('');
    // setDescription('');
    // setPhotos('');
    // setResponsibility('');
    // setSelectedDepartment('');
    // setSelectedArea('');
  };

  return (
    <ThemeProvider theme={theme}>
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="h1">Hazard Reporting</Typography>{" "}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <AreaField onSelectArea={handleSelectArea} />
        <DepartmentField onSelectDepartment={handleSelectDepartment} />
      </div>
      <DateSelector
        selectedDate={reportDate}
        onDateChange={handleReportDateChange}
      />
      <handleStatusChange
        setReportedStatus={reportedStatus}
        onChange={handleStatusChange}
      />
      <TextField
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        multiline
        rows={4}
        label="Description"
        style={{ marginBottom: '1rem' }}
      />
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <TextField
          type="text"
          id="photos"
          value={photos}
          onChange={(event) => setPhotos(event.target.value)}
          label="Add photo"
        />
        <TextField
          type="text"
          id="responsibility"
          value={responsibility}
          onChange={(event) => setResponsibility(event.target.value)}
          label="Responsibility"
        />
      </div>
      <Button type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
    </ThemeProvider>
  );
};

export default HazardReportingForm;
