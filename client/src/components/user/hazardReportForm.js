import React, { useState, useEffect } from 'react';
import '../../styles/HazardReportingForm.css';
import "../../App.css";

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

  useEffect(async() => {
    await fetch(`http://localhost:4000/api/department`)
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

    // reset form
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
    setSelectedDepartment({ department: selectedDepartmentData.department });
  };

  const handleAreaChange = (event) => {
    const selectedAreaData = areas.find(area => area._id === event.target.value);
    setSelectedArea({ area: selectedAreaData.name });
  };

  return (
<form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
  <h1 style={{ marginBottom: "1rem" }}>Hazard Reporting</h1>
  
  <label style={{ marginBottom: "1rem" }}>Department:
    <select value={selectedDepartment} onChange={handleDepartmentChange} style={{ marginLeft: "1rem" }}>
      <option value="">Select a department</option>
      {departments.length > 0 &&
        departments.map((department) => (
          <option key={department._id} value={department._id}>
            {department.department}
          </option>
        ))}
    </select>
  </label>

  <label style={{ marginBottom: "1rem" }}>Area:
    <select value={selectedArea} onChange={handleAreaChange} style={{ marginLeft: "2rem" }}>
      <option value="">Select an Area</option>
      {areas.length > 0 &&
        areas.map((area) => (
          <option key={area._id} value={area._id}>
            {area.name}
          </option>
        ))}
    </select>
  </label>

  <label htmlFor="description" style={{ marginBottom: "1rem" }}>Description:</label>
  <textarea
    id="description"
    value={description}
    onChange={(event) => setDescription(event.target.value)}
    style={{ marginBottom: "1rem", width: "100%", padding: "0.5rem" }}
  />

  <label htmlFor="reportDate" style={{ marginBottom: "1rem" }}>Date:</label>
  <input
    type="date"
    id="reportDate"
    value={reportDate}
    onChange={(event) => setReportDate(event.target.value)}
    style={{ marginBottom: "1rem", padding: "0.5rem" }}
  />

  <label htmlFor="photos" style={{ marginBottom: "1rem" }}>Add photo:</label>
  <input
    type="text"
    id="photos"
    value={photos}
    onChange={(event) => setPhotos(event.target.value)}
    style={{ marginBottom: "1rem", padding: "0.5rem" }}
  />

  <label htmlFor="responsibility" style={{ marginBottom: "1rem" }}>Responsibility:</label>
  <input
    type="text"
    id="responsibility"
    value={responsibility}
    onChange={(event) => setResponsibility(event.target.value)}
    style={{ marginBottom: "1rem", padding: "0.5rem" }}
  />

  <button type="submit" style={{ padding: "0.5rem 1rem", backgroundColor: "blue", color: "white", borderRadius: "0.25rem", border: "none" }}>Submit</button>
</form>

  );
};

export default HazardReportingForm;
