import React, { useState, useEffect } from 'react';

const DepartmentForm = () => {
  const [sites, setSites] = useState([]);
  const [department, setDepartment] = useState('');
  const [status, setStatus] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log(`Submitting department form with site ${event.target.site.value}, department ${department} and status ${status}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="site">Site:</label>
        <select id="site" name="site">
          {sites.map((site) => (
            <option key={site.id} value={site.id}>
              {site.siteName}
            </option>
          ))}
        </select>
      </div>
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
