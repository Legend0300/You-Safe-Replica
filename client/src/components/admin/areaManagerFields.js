import { useState } from "react";

function AreaManagerForm() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [department, setDepartment] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");
  const [contact, setContact] = useState("");

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
    // do something with the form data, such as send it to a server or update a state object
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
          type="text"
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

export default AreaManagerForm;
