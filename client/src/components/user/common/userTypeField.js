import React from "react";

const UserType = ({ userType, onUserTypeChange }) => {
  const handleUserTypeChange = (event) => {
    onUserTypeChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="userType">User Type:</label>
      <select id="userType" name="userType" value={userType} onChange={handleUserTypeChange}>
        <option value="">Select User Type</option>
        <option value="employee">Employee</option>
        <option value="visitor">Visitor</option>
        <option value="admin">Admin</option>
        <option value="areaManager">Area Manager</option>
      </select>
    </div>
  );
};

export default UserType;
