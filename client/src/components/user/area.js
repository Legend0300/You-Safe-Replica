import React, { useState, useEffect } from 'react';

const AreaForm = () => {
  const [sites, setSites] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedSite, setSelectedSite] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [areaName, setAreaName] = useState('');
  const [status, setStatus] = useState('');

//   useEffect(() => {
//     // Fetch sites data from backend API
//     fetch('https://example.com/api/sites')
//       .then((response) => response.json())
//       .then((data) => setSites(data))
//       .catch((error) => console.error(error));
//   }, []);

  const handleSiteChange = (event) => {
    setSelectedSite(event.target.value);

//     // Fetch departments data for the selected site from backend API
//     fetch(`https://example.com/api/departments?site=${event.target.value}`)
//       .then((response) => response.json())
//       .then((data) => setDepartments(data))
//       .catch((error) => console.error(error));
   };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleAreaNameChange = (event) => {
    setAreaName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // handle form submission logic here
    console.log({
      site: selectedSite,
      department: selectedDepartment,
      area: areaName,
      status: status
    });

    // reset form fields
    setSelectedSite('');
    setSelectedDepartment('');
    setAreaName('');
    setStatus('');
  };

  return (
    <div>
      <h1>Area Form</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Site:
          <select value={selectedSite} onChange={handleSiteChange}>
            <option value="">Select Site</option>
            {sites.map((site) => (
              <option key={site.id} value={site.name}>{site.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Department:
          <select value={selectedDepartment} onChange={handleDepartmentChange}>
            <option value="">Select Department</option>
            {departments.map((department) => (
              <option key={department.id} value={department.name}>{department.name}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Area:
          <input type="text" value={areaName} onChange={handleAreaNameChange} />
        </label>
        <br />
        <label>
          Status:
          <select value={status} onChange={handleStatusChange}>
            <option value="">Select Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AreaForm;
