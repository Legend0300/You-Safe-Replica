import { useState } from "react";

function DepartmentForm(props) {
  const [department, setDepartment] = useState(props.department || "");
  const [status, setStatus] = useState(props.status || "");

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to update the state with the new values
    props.onSubmit(department, status);
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="status">Status:</label>
        <input
          type="text"
          id="status"
          name="status"
          value={status}
          onChange={handleStatusChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default DepartmentForm;
