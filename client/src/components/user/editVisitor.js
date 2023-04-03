import React, { useState, useEffect } from 'react';

const VisitorEditForm = (props) => {
  const [fullName, setFullName] = useState(props.fullName);
  const [email, setEmail] = useState(props.email);
  const [site, setSite] = useState(props.site);
  const [contact, setContact] = useState(props.contact);
  const [department, setDepartment] = useState(props.department);
  const [area, setArea] = useState(props.area);
  const [status, setStatus] = useState(props.status);

  useEffect(() => {
    setFullName(props.fullName);
    setEmail(props.email);
    setSite(props.site);
    setContact(props.contact);
    setDepartment(props.department);
    setArea(props.area);
    setStatus(props.status);
  }, [props]);

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
        <label htmlFor="area">Area</label>
        <input type="text" id="area" value={area} onChange={(e) => setArea(e.target.value)} />
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <input type="text" id="status" value={status} onChange={(e) => setStatus(e.target.value)} />
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default VisitorEditForm;
