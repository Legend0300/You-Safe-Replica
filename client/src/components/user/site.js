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

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    // you can access form data with state variables e.g. siteName, location etc.
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
