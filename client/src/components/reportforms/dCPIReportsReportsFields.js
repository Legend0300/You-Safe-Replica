import { useState } from "react";

function DCPIReportsForm() {
  const [site, setSite] = useState("");
  const [formCompliant, setFormCompliant] = useState(false);
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const handleFormCompliantChange = (event) => {
    setFormCompliant(event.target.checked);
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
    // handle form submission here
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
        <label htmlFor="formCompliant">Form Compliant:</label>
        <input
          type="checkbox"
          id="formCompliant"
          name="formCompliant"
          checked={formCompliant}
          onChange={handleFormCompliantChange}
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
          type="date"
          id="reportDate"
          name="reportDate"
          value={reportDate}
          onChange={handleReportDateChange}
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
        <label htmlFor="endDate">End Date:</label>
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

export default DCPIReportsForm;
