import React, { useState } from 'react';
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import DateSelector from '../common/DateSelector';

const HazardReportingForm = () => {
  const [reportedStatus, setReportedStatus] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedArea, setSelectedArea] = useState('');


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
  
  const handleReportDateChange = event =>{
    const selectedReportedDate = event.target.value;
    setReportDate(selectedReportedDate);
    console.log(selectedReportedDate);
  }
  
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
    <form onSubmit={handleSubmit}>
      <h1>Hazard Reporting</h1>
      <AreaField onSelectArea={handleSelectArea} />

      <DepartmentField onSelectDepartment={handleSelectDepartment} />

      <DateSelector selectedDate={reportDate} onDateChange={handleReportDateChange} />

      <handleStatusChange setReportedStatus={reportedStatus} onChange={handleStatusChange} />
      <br />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        
      />
      <label htmlFor="photos">Add photo:</label>
      <input
        type="text"
        id="photos"
        value={photos}
        onChange={(event) => setPhotos(event.target.value)}
        
      />
      <label htmlFor="responsibility">Responsibility:</label>
      <input
        type="text"
        id="responsibility"
        value={responsibility}
        onChange={(event) => setResponsibility(event.target.value)}
        
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default HazardReportingForm;
