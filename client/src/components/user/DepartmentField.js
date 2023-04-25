import React, { useEffect, useState } from "react";

const  DepartmentField = ({ onSelectDepartment }) => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  useEffect(() => {
    fetch(`http://localhost:4000/api/department`)
      .then((response) => response.json())
      .then((data) => setDepartments(data))
      .catch((error) => console.error(error));
  }, []);
  const handleDepartmentChange = (event) => {
    const selectedDepartmentData = departments.find(
      (department) => department._id === event.target.value
    );
    setSelectedDepartment(selectedDepartmentData.department);
    onSelectDepartment(selectedDepartmentData.department);
  };
  
  return (
    <>
        Department:
        <select value={selectedDepartment.department} onChange={handleDepartmentChange}>
          <option value="null">Select a department</option>
          {departments.map((department) => (
            <option key={department._id} value={department._id}>
              {department.department}
            </option>
          ))}
        </select>
    </>
  );
}

export default DepartmentField;
