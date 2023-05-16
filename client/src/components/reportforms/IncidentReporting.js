import React, { useState } from 'react';
import { FormControl, InputLabel, Input, TextareaAutosize, ThemeProvider, Button } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const IncidentReporting = () => {
  const [formState, setFormState] = useState({
    department: '',
    area: '',
    incidentType: '',
    description: '',
    date: '',
    time: '',
    action: '',
    photo: null,
    eventType: '',
    eventSubTypes: '',
    reason: '',
  });
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
      MuiTextareaAutosize: {
        styleOverrides: {
          root: {
            width: '300px',
          },
        },
      },
    },
  });

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Do something with formState, like submit to a server
    console.log(formState);
  };

  return (
    <div>
      <h1>Incident Reporting</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={formState.department}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Area:
            <input
              type="text"
              name="area"
              value={formState.area}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Incident Type:
            <input
              type="text"
              name="incidentType"
              value={formState.incidentType}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formState.date}
              onChange={handleInputChange}
              max={new Date().toISOString().split('T')[0]}
              validationMessage="Report date cannot be in the future"
              required
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formState.time}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Action:
            <input
              type="text"
              name="action"
              value={formState.action}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Add Photo:
            <input
              type="file"
              name="photo"
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Event Type:
            <input
              type="text"
              name="eventType"
              value={formState.eventType}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Event Sub Types:
            <input
              type="text"
              name="eventSubTypes"
              value={formState.eventSubTypes}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Reason:
            <textarea
              name="reason"
              value={formState.reason}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default IncidentReporting;
