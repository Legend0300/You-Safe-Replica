import { useState } from "react";

function VisitorForm() {
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [contact, setContact] = useState("");
  const [department, setDepartment] = useState("");
  const [area, setArea] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function to handle form submission
    console.log({
      fullName,
      emailAddress,
      contact,
      department,
      area,
      status,
    });
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
          onChange={(event) => setFullName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="emailAddress">Email Address:</label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={emailAddress}
          onChange={(event) => setEmailAddress(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="contact">Contact:</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          value={contact}
          onChange={(event) => setContact(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="area">Area:</label>
        <input
          type="text"
          id="area"
          name="area"
          value={area}
          onChange={(event) => setArea(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default VisitorForm;
