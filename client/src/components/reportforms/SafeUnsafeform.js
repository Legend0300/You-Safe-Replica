import React, { useState , useEffect } from 'react';
import DepartmentField from '../common/DepartmentField';
import AreaField from '../common/AreaField';
import DateSelector from '../common/DateSelector';

const NewSafeUnsafeActsForm = () => {
  const [actType, setActType] = useState('');
  // const [department, setDepartment] = useState('');
  // const [area, setArea] = useState('');
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
      console.log("fetching managers");
      const response = await fetch("http://localhost:4000/api/areaManager");
      const data = await response.json();
      setManagers(data);
    };
    fetchManagers();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to backend API
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

export default NewSafeUnsafeActsForm;
