import React, { useState, useEffect } from 'react';

const EditDepartment = () => {
  const [departments, setDepartments] = useState([]);

  const handleEdit = (id) => {
    // handle edit logic here
    console.log(`Editing department with id ${id}`);
  };

  return (
    <div>
      <h1>Edit Department</h1>
      <table>
        <thead>
          <tr>
            <th>Site</th>
            <th>Department</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.siteName}</td>
              <td>{department.departmentName}</td>
              <td>{department.status}</td>
              <td>
                <button onClick={() => handleEdit(department.id)}>Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditDepartment;
