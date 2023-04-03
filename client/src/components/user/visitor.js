import React, { useState } from 'react';

const VisitorForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [site, setSite] = useState('');
  const [contact, setContact] = useState('');
  const [department, setDepartment] = useState('');
  const [area, setArea] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="site">Site</label>
        <input type="text" id="site" value={site} onChange={(e) => setSite(e.target.value)} />
      </div>
      <div>
        <label htmlFor="contact">Contact</label>
        <input type="text" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
      </div>
      <div>
        <label htmlFor="department">Department</label>
        <input type="text" id="department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      </div>
      <div>
        <label htmlFor="area">
            Area
        </label>
        <input type="text" id="area" value={area} onChange={(e) => setArea(e.target.value)} />
        </div>
    <div>
        <label htmlFor="status">
            Status
        </label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
        </select>
    </div>
    </form>
    );
}

export default VisitorForm;
