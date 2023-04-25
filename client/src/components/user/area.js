import React, { useState, useEffect } from 'react';

const AreaForm = () => {
  const [sites, setSites] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedSite, setSelectedSite] = useState({ siteName: '' });
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [areaName, setAreaName] = useState('');
  const [status, setStatus] = useState("");

  useEffect(() => {
    // Fetch sites data from backend API
    fetch('http://localhost:4000/api/site')
      .then((response) => response.json())
      .then((data) => setSites(data))
      .catch((error) => console.error(error));
  }, []);

  // Fetch departments data for the selected site from backend API
  useEffect(() => {


  fetch(`http://localhost:4000/api/department`)
    .then((response) => response.json())
    .then((data) => setDepartments(data))
    .catch((error) => console.error(error));

  }, []);

  const handleSiteChange = (event) => {
    const selectedSiteData = sites.find(site => site._id === event.target.value);
    setSelectedSite({ siteName: selectedSiteData.siteName });

    // Fetch departments data for the selected site from backend API
  };

  const handleDepartmentChange = (event) => {
    const selectedDepartmentData = departments.find(department => department._id === event.target.value);
    setSelectedDepartment({ department: selectedDepartmentData.department });
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
      site: selectedSite.siteName,
      department: selectedDepartment.department,
      area: areaName,
      status: status,
    });

    // reset form fields
    setSelectedSite({ siteName: '' });
    setSelectedDepartment({ department: '' });
    setAreaName('');
    setStatus('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Site:
        <select value={selectedSite.siteName} onChange={handleSiteChange}>
          <option value="">Select a site</option>
          {sites.map((site) => (
            <option key={site._id} value={site._id}>
              {site.siteName}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Department:
        <select value={selectedDepartment.department} onChange={handleDepartmentChange}>
          <option value="">Select a department</option>
          {departments.map((department) => (
            <option key={department._id} value={department._id}>
              {department.department}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Area name:
        <input type="text" value={areaName} onChange={handleAreaNameChange} />
      </label>
      <br />
      <label>
        Status:
        <select name="status" value={status} onChange={handleStatusChange}>
          <option hidden value="">Select a status</option>
          <option value="Enabled">Enabled</option>
          <option value="Disabled">Disabled</option>
        </select>
      </label>
      <br />
      <button type="submit">Create area</button>
    </form>
  );
};

export default AreaForm;
