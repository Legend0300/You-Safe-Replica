import { useState } from "react";

function AssignAreaManagerForm(props) {
  const [department, setDepartment] = useState(props.department);
  const [area, setArea] = useState(props.area);
  const [user, setUser] = useState(props.user);

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to update the state with the new values
    props.onSubmit(department, area, user);
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
        <label htmlFor="user">User:</label>
        <input
          type="text"
          id="user"
          name="user"
          value={user}
          onChange={handleUserChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AssignAreaManagerForm;
