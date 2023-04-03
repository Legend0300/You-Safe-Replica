import React, { useState, useEffect } from 'react';

const EditSite = () => {
  const [sites, setSites] = useState([]);


  const handleEdit = (siteId) => {
    // handle edit functionality here
    console.log(`Editing site with id ${siteId}`);
  };

  const handleDelete = (siteId) => {
    // handle delete functionality here
    console.log(`Deleting site with id ${siteId}`);
  };

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
            <td>{site.siteName}</td>
            <td>{site.location}</td>
            <td>{site.country}</td>
            <td>{site.city}</td>
            <td>{site.manager.fullName}</td>
            <td>{site.manager.email}</td>
            <td>{site.manager.contact}</td>
            <td>{site.manager.status}</td>
            <td>
              <button onClick={() => handleEdit(site.id)}>Edit</button>
              <button onClick={() => handleDelete(site.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EditSite;
