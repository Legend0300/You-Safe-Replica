import { useState } from "react";

function SafeUnsafeReportForm() {
  const [site, setSite] = useState("");
  const [department, setDepartment] = useState("");
  const [area, setArea] = useState("");
  const [actType, setActType] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleActTypeChange = (event) => {
    setActType(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event.target.value);
  };

  const handleReportDateChange = (event) => {
    setReportDate(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
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
        <label htmlFor="actType">Act Type:</label>
        <input
          type="text"
          id="actType"
          name="actType"
          value={actType}
          onChange={handleActTypeChange}
        />
      </div>
      <div>
        <label htmlFor="userType">User Type:</label>
        <input
          type="text"
          id="userType"
          name="userType"
          value={userType}
          onChange={handleUserTypeChange}
        />
      </div>
      <div>
        <label htmlFor="reportedStatus">Reported Status:</label>
        <input
          type="text"
          id="reportedStatus"
          name="reportedStatus"
          value={reportedStatus}
          onChange={handleReportedStatusChange}
        />
      </div>
      <div>
        <label htmlFor="reportDate">Report Date:</label>
        <input
          type="text"
          id="reportDate"
          name="reportDate"
          value={reportDate}
          onChange={handleReportDateChange}
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
            type="text"
            id="startDate"
            name="startDate"
            value={startDate}
            onChange={handleStartDateChange}
        />
        </div>
        <div>
        <label htmlFor="endDate">End Date:</label>
        <input
            type="text"
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

export default SafeUnsafeReportForm;