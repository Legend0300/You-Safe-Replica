import React from "react";

function StatusSelector({ status, setStatus }) {
  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div>
      <label htmlFor="status">Status</label>
      <select id="status" value={status} onChange={handleStatusChange}>
        <option hidden value="">
          Select a status
        </option>
        <option value="Enabled">Enabled</option>
        <option value="Disabled">Disabled</option>
      </select>
    </div>
  );
}

export default StatusSelector;
