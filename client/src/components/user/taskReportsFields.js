import { useState } from "react";

function TaskReportsForm(props) {
  const [site, setSite] = useState("");
  const [type, setType] = useState("");
  const [assignedBy, setAssignedBy] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [assignedDate, setAssignedDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleAssignedByChange = (event) => {
    setAssignedBy(event.target.value);
  };

  const handleAssignedToChange = (event) => {
    setAssignedTo(event.target.value);
  };

  const handleTaskStatusChange = (event) => {
    setTaskStatus(event.target.value);
  };

  const handleAssignedDateChange = (event) => {
    setAssignedDate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to handle the form submission
    const obj = ({
      type,
      assignedBy,
      assignedTo,
      taskStatus,
      assignedDate,
      startDate,
      endDate,
    });
    console.log(obj);

    //reset 
    setType("");
    setAssignedBy("");
    setAssignedTo(""); 
    setTaskStatus("");
    setAssignedDate("");
    setStartDate("");
    setEndDate("");
    
  };

  const reportingTypes = [
    'Safe/Unsafe Acts',
    'Hazard Reporting',
    'Incident Reporting',
    'Deep Compliance Reporting',
    'Planned Inspection',
    'Safety Action Meeting (SAM)'
  ]

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label htmlFor="type">Type:</label>
      <select type="text" id="type" name="type" value={type} onChange={handleTypeChange}>
        <option value="">Select Type</option>
        {reportingTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      </div>
      <div>
        <label htmlFor="assignedBy">Assigned By:</label>
        <select type="text" id="assignedBy" value={assignedBy} onChange={handleAssignedByChange} name="assignedBy">
          <option value="">Select User Type</option>
          <option value="self">Self</option>
          <option value="employee">Employee</option>
          <option value="visitor">Visitor</option>
          <option value="admin">Admin</option>
          <option value="areaManager">Area Manager</option>
        </select>
      </div>
      <div>
      <label htmlFor="userType">Assigned To:</label>
  <select  type="text" id="assignedTo" name="assignedTo" value={assignedTo} onChange={handleAssignedToChange}>
    <option value="">Select User Type</option>
    <option value="self">Self</option>
    <option value="employee">Employee</option>
    <option value="visitor">Visitor</option>
    <option value="admin">Admin</option>
    <option value="areaManager">Area Manager</option>
  </select>
      </div>
      <div>
        <label htmlFor="reportedStatus">Reported Status:</label>
        <select onChange={handleTaskStatusChange}  value={taskStatus} name="reportedStatus" id="reportedStatus">
          <option value="">Select Reported Status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div>
        <label htmlFor="assignedDate">Assigned Date:</label>
        <input
          type="date"
          id="assignedDate"
          name="assignedDate"
          value={assignedDate}
          onChange={handleAssignedDateChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={handleStartDateChange}
        />
      </div>
      <div>
        <label htmlFor="endDate" className="form-label">
            End Date:
        </label>
        <input
            type="date"
            id="endDate"
            name="endDate"
            value={endDate}
            onChange={handleEndDateChange}
        />
        </div>
        <button type="submit">Submit</button>
    </form>
    );
}

export default TaskReportsForm;