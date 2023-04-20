import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AreaManager = () => {
  const [areaManagerName, setAreaManagerName] = useState("");
  const [areas, setAreas] = useState([]);
  const [sites , setSites] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [selectedSite, setSelectedSite] = useState({ siteName: '' });
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });
  const [status, setStatus] = useState('');

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

  useEffect(() => {
    // Fetch areas data for the selected department from backend API
    fetch(`http://localhost:4000/api/area`)
      .then((response) => response.json())
      .then((data) => setAreas(data))
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

  const handleAreaChange = (event) => {
    const selectedAreaData = areas.find(area => area._id === event.target.value);
    setSelectedArea({ area: selectedAreaData.name });
  };

  const handleAreaManagerNameChange = (event) => {
    setAreaManagerName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      site: selectedSite.siteName,
      department: selectedDepartment.department,
      area: selectedArea.area,
      areaManagerName: areaManagerName,
      status,
      });

    // try {
    //   const res = await axios.post('/api/areaManager', {
    //     areaManagerName,
    //     area,
    //     department,
    //     status,
    //   });

    //   console.log(res.data);
    // } catch (err) {
    //   console.error(err);
    // }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="areaManagerName">Area Manager Name</label>
        <input type="text" id="areaManagerName" value={areaManagerName} onChange={(e) => setAreaManagerName(e.target.value)} />
      </div>

      <label>
        Area:
        <select value={selectedArea.name} onChange={handleAreaChange}>
          <option value="">Select a Area</option>
          {areas.map((area) => (
            <option key={area._id} value={area._id}>
              {area.name}
            </option>
          ))}
        </select>
      </label>
      <br />

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
      <div>
        <label htmlFor="status">
          Status
        </label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option hidden value="">Select a status</option>
          <option value="Enabled">Enabled</option>
          <option value="Disabled">Disabled</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AreaManager;
