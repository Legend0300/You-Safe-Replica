import React, { useState } from 'react';
import DepartmentField from '../common/DepartmentField';
import AreaField from '../common/AreaField';
import DateSelector from '../common/DateSelector';

const NewSafeUnsafeActsFormtest = () => {
  const [actType, setActType] = useState('');
  // const [department, setDepartment] = useState('');
  // const [area, setArea] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [photo, setPhoto] = useState(null);
  const [responsibility, setResponsibility] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to backend API
  };

  const handleSelectDepartment = (selectedDepartment)=>{
    setSelectedDepartment(selectedDepartment);
    console.log(selectedDepartment);
  };
  const handleSelectArea = (selectedArea)=>{
    setSelectedArea(selectedArea);
    console.log(selectedArea);
  };

  const handleDateChange=(date)=>{
    setDate(date);
    console.log(date);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <div>
      <h1>SafetyActionForm</h1>
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
        <DepartmentField onSelectDepartment={handleSelectDepartment} />
        
        <AreaField onSelectArea={handleSelectArea} />
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <DateSelector selectedDate={date} onSelectDate={handleDateChange} />
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
        <div>
          <label>Responsibility:</label>
          <input
            type="text"
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSafeUnsafeActsFormtest;
