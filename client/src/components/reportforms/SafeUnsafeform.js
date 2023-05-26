import React, { useState, useEffect } from 'react';
import { Select, MenuItem , FormControl , InputLabel } from '@mui/material';
import DepartmentField from '../common/DepartmentField';
import AreaField from '../common/AreaField';
import DateSelector from '../common/DateSelector';


const NewSafeUnsafeActsForm = () => {
  const [actType, setActType] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [photo, setPhoto] = useState(null);
  const [responsibility, setResponsibility] = useState('');
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    const fetchManagers = async () => {
      console.log('fetching managers');
      const response = await fetch('http://localhost:4000/api/areaManager');
      const data = await response.json();
      setManagers(data);
    };
    fetchManagers();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Create a form data object

    try {
      const response = await fetch('http://localhost:4000/api/safeUnsafeReport', {
        method: 'POST',
        body: {
          actType: actType,
          department: selectedDepartment,
          area: selectedArea,
          description: description,
          date: date,
          time: time,
          photos: photo,
          responsibility: responsibility,
          description: description,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to create new safe/unsafe report');
      }

      // Reset the form fields after successful submission
      setActType('');
      setSelectedDepartment('');
      setSelectedArea('');
      setDescription('');
      setDate('');
      setTime('');
      setPhoto(null);
      setResponsibility('');

      console.log('New safe/unsafe report created successfully');
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSelectedDepartment = (selectedDepartment) => {
    setSelectedDepartment(selectedDepartment);
  };

  const handleSelectedArea = (selectedArea) => {
    setSelectedArea(selectedArea);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleResponsibilityChange = (event) => {
    setResponsibility(event.target.value);
  };

  return (
    <div>
      <h1>SafeUnsafeForm</h1>
      <h1>New Safe/Unsafe Acts</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Act Type:</label>
          <input
            type="text"
            value={actType}
            onChange={(e) => setActType(e.target.value)}
            required
          />
        </div>
        <DepartmentField onSelectDepartment={handleSelectedDepartment} />

        <AreaField onSelectArea={handleSelectedArea} />

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <DateSelector onDateChange={handleDateChange} />

        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Add Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            required
          />
        </div>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSafeUnsafeActsForm;