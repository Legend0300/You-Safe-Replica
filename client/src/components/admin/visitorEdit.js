import { useState } from "react";

function VisitorFormEdit(props) {
  const [fullName, setFullName] = useState(props.fullName);
  const [email, setEmail] = useState(props.email);
  const [contact, setContact] = useState(props.contact);
  const [department, setDepartment] = useState(props.department);
  const [area, setArea] = useState(props.area);
  const [status, setStatus] = useState(props.status);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to update the state with the new values
    props.onSubmit(fullName, email, contact, department, area, status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={contact}
          onChange={handleContactChange}
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={department}
          onChange={handleDepartmentChange}
        />
      </div>
      <div>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          name="area"
          value={area}
          onChange={handleAreaChange}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={status} onChange={handleStatusChange}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit">Save Changes</button>
    </form>
  );
}

export default VisitorFormEdit;
