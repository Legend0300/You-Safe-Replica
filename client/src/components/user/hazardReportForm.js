import React, { useState, useEffect } from 'react';
import DepartmentField from "./common/DepartmentField";
import SiteField from "./common/siteField";
import AreaField from "./common/AreaField";
import DateSelector from './common/DateSelector';

const HazardReportingForm = () => {
  const [reportedStatus, setReportedStatus] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState('');
  const [responsibility, setResponsibility] = useState('');
  const [areas, setAreas] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  useEffect(() => {
    fetch(`http://localhost:4000/api/department`)
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Fetch areas data for the selected department from backend API
   fetch(`http://localhost:4000/api/area`)
      .then((response) => response.json())
      .then((data) => setAreas(data))
      .catch((error) => console.error(error));
  }, [selectedDepartment]);

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

  // const handlereportDateChange = (date) => {
  //   setReportDate(date);
  //   console.log(reportDate);
  // };

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
      selectedDepartment,
      selectedArea,
    });

    setDepartments([]);
    setAreas([]);
    setReportedStatus('');
    setReportDate('');
    setDescription('');
    setPhotos('');
    setResponsibility('');
    setSelectedDepartment('');
    setSelectedArea('');
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartmentData = departments.find(department => department._id === event.target.value);
    console.log(selectedDepartmentData);
    setSelectedDepartment(selectedDepartmentData.department );
  };

  const handleAreaChange = (event) => {
    const selectedAreaData = areas.find(area => area._id === event.target.value);
    setSelectedArea(selectedAreaData.name);
  };

  const handleReportDateChange = event =>{
    const selectedReportedDate = event.target.value;
    setReportDate(selectedReportedDate);
    console.log(selectedReportedDate);
  }
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
