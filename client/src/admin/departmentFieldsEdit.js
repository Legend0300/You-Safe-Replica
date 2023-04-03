import { useState } from "react";

function DepartmentEditForm(props) {
  const [department, setDepartment] = useState(props.department);
  const [status, setStatus] = useState(props.status);

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
      <button type="submit">Save</button>
    </form>
  );
}

function DepartmentView(props) {
  return (
    <div>
      <h2>{props.department}</h2>
      <p>Status: {props.status}</p>
      <button onClick={props.onEdit}>Edit</button>
    </div>
  );
}

function Department(props) {
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleSave = (department, status) => {
    // Call a function from the parent component to update the state with the new values
    props.onSave(department, status);
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <DepartmentEditForm
          department={props.department}
          status={props.status}
          onSubmit={handleSave}
        />
      ) : (
        <DepartmentView
          department={props.department}
          status={props.status}
          onEdit={handleEdit}
        />
      )}
    </div>
  );
}
