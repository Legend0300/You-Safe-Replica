import React, { useState, useEffect } from 'react';

const EditSite = () => {
  const [sites, setSites] = useState([]);
  const [editingSiteId, setEditingSiteId] = useState(null);


  useEffect(() => {
    // Fetch sites data from backend API
    fetch('http://localhost:4000/api/site')
      .then((response) => response.json())
      .then((data) => setSites(data))
      .catch((error) => console.error(error));
  }, []);


  const handleEdit = (siteId) => {
    setEditingSiteId(siteId);
  };

  const handleDelete = (siteId) => {
    const updatedSites = sites.filter(site => site.id !== siteId);
    setSites(updatedSites);
  };

  const handleUpdate = (updatedSite) => {
    const updatedSites = sites.map(site => {
      if (site.id === updatedSite.id) {
        console.log(updatedSite);
        console.log();
        return updatedSite;
      } else {
        return site;
      }
    });
    setSites(updatedSites);
    setEditingSiteId(null);
  };

  useEffect(() => {
    // fetch sites data here
    // setSites(data);
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Site Name</th>
          <th>Location</th>
          <th>Country</th>
          <th>City</th>
          <th>Full Name</th>
          <th>Email</th>
          <th>Contact</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site) => (
          <tr key={site.id}>
            <td>
              {editingSiteId === site.id ? (
                <input
                  type="text"
                  value={site.siteName}
                  onChange={(e) =>
                    setSites(
                      sites.map((s) =>
                        s.id === site.id
                          ? { ...s, siteName: e.target.value }
                          : s
                      )
                    )
                  }
                />
              ) : (
                site.siteName
              )}
            </td>
            <td>
              {editingSiteId === site.id ? (
                <input
                  type="text"
                  value={site.location}
                  onChange={(e) =>
                    setSites(
                      sites.map((s) =>
                        s.id === site.id
                          ? { ...s, location: e.target.value }
                          : s
                      )
                    )
                  }
                />
              ) : (
                site.location
              )}
            </td>
            <td>{site.country}</td>
            <td>{site.city}</td>
            <td>{site.managerInformation.fullName}</td>
            <td>{site.managerInformation.email}</td>
            <td>{site.managerInformation.contact}</td>
            <td>{site.managerInformation.status}</td>
            <td>
              {editingSiteId === site.id ? (
                <>
                  <button onClick={() => handleUpdate(site)}>Save</button>
                  <button onClick={() => setEditingSiteId(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button onClick={() => handleEdit(site.id)}>Edit</button>
                  <button onClick={() => handleDelete(site.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditSite;
