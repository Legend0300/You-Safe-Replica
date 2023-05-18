import { useState } from "react";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import UserType from "../common/userTypeField";
import DateSelector from "../common/DateSelector";
import StatusSelector from "../common/statusSelector";
import { Box, FormControl, InputLabel, Input, ThemeProvider, Button,Select } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';


function IncidentReportForm(props) {
  // const [departments, setDepartments] = useState([]);
  // const [areas, setAreas] = useState([]);
  const [eventType, setEventType] = useState("");
  const [eventSubType, setEventSubType] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });
  const [incidentType, setIncidentType] = useState({ IncidentType: '' });

  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffff00', // yellow
      },
      background: {
        default: '#ffffff', // white
      },
    },
    components: {
      MuiFormControl: {
        styleOverrides: {
          root: {
            marginBottom: '20px',
            display: 'flex',
            flexDirection: 'column',
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            width: '300px',
          },
        },
      },
    },
  });


  const handleSelectDepartment = (selectedDepartment)=>{
    setSelectedDepartment(selectedDepartment);
    console.log(selectedDepartment);
  }

  const handleSelectArea = (selectedArea)=>{
    setSelectedArea(selectedArea);
    console.log(selectedArea);
  }

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleEventSubTypeChange = (event) => {
    setEventSubType(event.target.value);
  };


  const handleReportedStatusChange = (event) => {
    setReportedStatus(event);
  };


  const handleStartDateChange = (event) => {
    setStartDate(event);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
  };

  const handleIncidentTypeChange = (event) => {
    setIncidentType(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to handle the form submission
    console.log({
      selectedDepartment,
      selectedArea,
      eventType,
      eventSubType,
      userType,
      reportedStatus,
      startDate,
      endDate
    });

    // reset form
    // setDepartments([]);
    // setAreas([]);
    setSelectedDepartment("");
    setSelectedArea("");
    setEventType("");
    setEventSubType("");
    setUserType("");
    setReportedStatus("");
    setStartDate("");
    setEndDate("");

  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Box>
          <h1>Incident Report Form</h1>
          <AreaField onSelectArea={handleSelectArea} />
          <DepartmentField onSelectDepartment={handleSelectDepartment} />
          <FormControl>
            <InputLabel htmlFor="eventType">Event Type:</InputLabel>
            <Input
              type="text"
              id="eventType"
              name="eventType"
              value={eventType}
              onChange={handleEventTypeChange}
            />
          </FormControl>
        
          <FormControl>
            <InputLabel htmlFor="eventSubType">Event Sub Type:</InputLabel>
            <Input
              type="text"
              id="eventSubType"
              name="eventSubType"
              value={eventSubType}
              onChange={handleEventSubTypeChange}
            />
          </FormControl>
          
          <FormControl>
          <InputLabel htmlFor="incidentType">Incident Type</InputLabel>
        <Select
        style={{ width: '120px' }}
          id="incidentType"
          name="incidentType"
          value={incidentType}
          onChange={handleIncidentTypeChange}
        >
          <option value="IncidentType">Select Incident</option>
        </Select>
          </FormControl>      
          <StatusSelector status={reportedStatus} setStatus={handleReportedStatusChange} />
          <DateSelector selectedDate={startDate} onDateChange={handleStartDateChange} />
          <DateSelector selectedDate={endDate} onDateChange={handleEndDateChange} />
        </Box>
        <Button style={{background: "yellow" , color: "black"}} type="submit">Submit</Button>
      </form>
    </ThemeProvider>
  );
  
}

export default IncidentReportForm;