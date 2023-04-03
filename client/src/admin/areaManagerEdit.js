import { useState } from "react";

function AreaManagerEditForm(props) {
  const [fullName, setFullName] = useState(props.fullName);
  const [emailAddress, setEmailAddress] = useState(props.emailAddress);
  const [department, setDepartment] = useState(props.department);
  const [area, setArea] = useState(props.area);
  const [status, setStatus] = useState(props.status);
  const [contact, setContact] = useState(props.contact);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailAddressChange = (event) => {
    setEmailAddress(event.target.value);
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

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to update the state with the new values
    props.onSubmit(fullName, emailAddress, department, area, status, contact);
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
        <label htmlFor="emailAddress">Email Address:</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={emailAddress}
          onChange={handleEmailAddressChange}
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
        <input
          type="text"
          id="status"
          name="status"
          value={status}
          onChange={handleStatusChange}
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
      <button type="submit">Submit</button>
    </form>
  );
}

export default AreaManagerEditForm;
