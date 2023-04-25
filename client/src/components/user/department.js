import React, { useState, useEffect } from 'react';

const DepartmentForm = () => {
  const [sites, setSites] = useState([]);
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');
  const [selectedSite, setSelectedSite] = useState({ siteName: '' });
  useEffect(() => {
    // Fetch sites data from backend API
     fetch('http://localhost:4000/api/site')
      .then((response) => response.json())
      .then((data) => setSites(data))
      .catch((error) => console.error(error));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log({
      site: selectedSite.siteName,
      department: department,
      status: status,
    });

    setSelectedSite({ siteName: '' });
    setDepartment('');
    setStatus('');
  };

  const handleSiteChange = (event) => {
    const selectedSiteData = sites.find(site => site._id === event.target.value);
    setSelectedSite({ siteName: selectedSiteData.siteName });

    // Fetch departments data for the selected site from backend API
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
      <div>
        <label htmlFor="department">Department:</label>
        <input type="text" id="department" name="department" value={department} onChange={(event) => setDepartment(event.target.value)} />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input type="text" id="status" name="status" value={status} onChange={(event) => setStatus(event.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default DepartmentForm;
