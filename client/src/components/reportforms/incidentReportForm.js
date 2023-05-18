import { useState } from "react";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import UserType from "../common/userTypeField";
import DateSelector from "../common/DateSelector";
import StatusSelector from "../common/statusSelector";
import { Box, FormControl, InputLabel, Input, ThemeProvider, Button } from '@mui/material';
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

  const handleUserTypeChange = (event) => {
    setUserType(event);
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
      endDate,
      description,
      endTime,
      action,
      reason,
    });

    // Reset form state
    setSelectedDepartment("");
    setSelectedArea("");
    setEventType("");
    setEventSubType("");
    setUserType("");
    setReportedStatus("");
    setStartDate("");
    setEndDate("");
    setDescription("");
    setEndTime("");
    setAction("");
    setReason("");
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={handleSubmit}>
        <Box>
          <h1>Incident Report Form</h1>
          <AreaField onSelectArea={handleSelectArea} />
          <DepartmentField onSelectDepartment={handleSelectDepartment} />
          <FormControl style={{ width: '200px' }}>
            <InputLabel htmlFor="eventType">Event Type:</InputLabel>
            <Select
              id="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
            >
              {eventTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl style={{ width: '300px' }}>
            <InputLabel style={{ width: '200px' }}htmlFor="eventSubType">Event Sub Type:</InputLabel>
            <Select
            style={{ width: '200px' }}
              id="eventSubType"
              value={eventSubType}
              onChange={(e) => setEventSubType(e.target.value)}
              required
            >
              {/* Map the options for event subtypes here */}
            </Select>
          </FormControl>
          <UserType userType={userType} onUserTypeChange={handleUserTypeChange} />
          <StatusSelector status={reportedStatus} setStatus={handleReportedStatusChange} />
          <DateSelector selectedDate={startDate} onDateChange={handleStartDateChange} />
          <DateSelector selectedDate={endDate} onDateChange={handleEndDateChange} />
          <FormControl>
            <InputLabel htmlFor="description">Description:</InputLabel>
            <TextareaAutosize
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              rows={4}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel  htmlFor="endDate">Due Date:</InputLabel>
            <TextField 
            style={{margin: "9%"}}
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </FormControl>

          <FormControl>
            <InputLabel htmlFor="action">Action:</InputLabel>
            <Input
              type="text"
              id="action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              required
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="reason">Reason:</InputLabel>
            <Input
              type="text"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </FormControl>
        </Box>
        <Button style={{ background: "yellow", color: "black" }} type="submit">
          Submit
        </Button>
      </form>
    </ThemeProvider>
  );
}

export default IncidentReportForm;
