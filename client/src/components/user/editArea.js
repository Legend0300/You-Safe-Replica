import { useState } from "react";

const EditAreaForm = ({ area, updateArea, cancelEdit }) => {
  const [site, setSite] = useState(area.site);
  const [department, setDepartment] = useState(area.department);
  const [name, setName] = useState(area.name);
  const [status, setStatus] = useState(area.status);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedArea = {
      id: area.id,
      site,
      department,
      name,
      status,
    };
    updateArea(updatedArea);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Area</h2>
      <div>
        <label htmlFor="site">Site:</label>
        <input
          type="text"
          id="site"
          value={site}
          onChange={(e) => setSite(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="status">Status:</label>
        <select id="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>
      <button type="submit">Update Area</button>
      <button type="button" onClick={() => cancelEdit()}>Cancel</button>
    </form>
  );
};

export default EditAreaForm;
