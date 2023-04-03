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
      site,
      type,
      assignedBy,
      assignedTo,
      taskStatus,
      assignedDate,
      startDate,
      endDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="site">Site:</label>
        <input
          type="text"
          id="site"
          name="site"
          value={site}
          onChange={handleSiteChange}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <input
          type="text"
          id="type"
          name="type"
          value={type}
          onChange={handleTypeChange}
        />
      </div>
      <div>
        <label htmlFor="assignedBy">Assigned By:</label>
        <input
          type="text"
          id="assignedBy"
          name="assignedBy"
          value={assignedBy}
          onChange={handleAssignedByChange}
        />
      </div>
      <div>
        <label htmlFor="assignedTo">Assigned To:</label>
        <input
          type="text"
          id="assignedTo"
          name="assignedTo"
          value={assignedTo}
          onChange={handleAssignedToChange}
        />
      </div>
      <div>
        <label htmlFor="taskStatus">Task Status:</label>
        <input
          type="text"
          id="taskStatus"
          name="taskStatus"
          value={taskStatus}
          onChange={handleTaskStatusChange}
        />
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