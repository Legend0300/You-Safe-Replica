import React, { useState } from 'react';

const SiteForm = () => {
  const [siteName, setSiteName] = useState('');
  const [location, setLocation] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Create a data object containing the form fields
    const data = {
      siteName,
      location,
      country,
      city,
      managerInformation: {
        fullName,
        emailAddress: email,
        contact,
        status,
      },
    };
  
    try {
      // Make an HTTP POST request to the server-side API endpoint
      const response = await fetch('http://localhost:4000/api/site', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      // Check if the request was successful
      if (response.ok) {
        // Do something after successful submission
      } else {
        // Handle errors
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Site Fields</h2>
      <label>
        Site Name:
        <input
          type="text"
          value={siteName}
          onChange={(event) => setSiteName(event.target.value)}
        />
      </label>
      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>
      <label>
        Country:
        <input
          type="text"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <h2>Manager Information</h2>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
      </label>
      <label>
        Email Address:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <label>
        Contact:
        <input
          type="text"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </label>
      <label>
        Status:
        <select
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        >
          <option value="">--Select--</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SiteForm;
