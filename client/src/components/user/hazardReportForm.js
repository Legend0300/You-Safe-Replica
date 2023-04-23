import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
      <h1>Hazard Reporting</h1>
      Department:
      <select value={selectedDepartment} onChange={handleDepartmentChange}>
        <option value="">Select a department</option>
        {departments.length > 0 &&
          departments.map((department) => (
            <option key={department._id} value={department._id}>
              {department.department}
            </option>
          ))}
      </select>

      <label>
        Area:
        <select value={selectedArea} onChange={handleAreaChange}>
          <option value="">Select an Area</option>
          {areas.length > 0 &&
            areas.map((area) => (
              <option key={area._id} value={area._id}>
                {area.name}
              </option>
            ))}
        </select>
      </label>
      <br />
      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        
      />
      <label htmlFor="reportDate">Date:</label>
      <input
        type="date"
        id="reportDate"
        value={reportDate}
        onChange={(event) => setReportDate(event.target.value)}
        
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
