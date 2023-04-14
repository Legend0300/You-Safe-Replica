import { useState } from "react";

function HazardReportForm(props) {
  const [site, setSite] = useState("");
  const [department, setDepartment] = useState("");
  const [area, setArea] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportStartDate, setReportStartDate] = useState("");
  const [reportEndDate, setReportEndDate] = useState("");

  const handleSiteChange = (event) => {
    setSite(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event.target.value);
  };

  const handleReportStartDateChange = (event) => {
    setReportStartDate(event.target.value);
  };

  const handleReportEndDateChange = (event) => {
    setReportEndDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to handle form submission
    const obj = ({
      site,
      department,
      area,
      userType,
      reportedStatus,
      reportStartDate,
      reportEndDate,
    });
    console.log("Form submitted");
    console.log(obj);
  };

  return (
    <form onSubmit={handleSubmit}>

<h1>Hazard Reports</h1>

      <div>
        <label htmlFor="site">Site:</label>
        <input
          type="text"
          id="site"
          name="site"
          value={site}
          onChange={handleSiteChange}
          required
          validationMessage="Required"
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
          required
          validationMessage="Required"
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
          required
          validationMessage="Required"
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
          required
          validationMessage="Required"
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
          required
          validationMessage="Required"
        />
      </div>
      <div>
        <label htmlFor="reportStartDate">Report Start Date:</label>
        <input
          type="date"
          id="reportStartDate"
          name="reportStartDate"
          value={reportStartDate}
          onChange={handleReportStartDateChange}
          required
          validationMessage="Required"
        />
      </div>
      <div>
        <label htmlFor="reportEndDate">Report End Date:</label>
        <input
          type="date"
          id="reportEndDate"
          name="reportEndDate"
          value={reportEndDate}
          onChange={handleReportEndDateChange}
          required
          validationMessage="Required"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default HazardReportForm;
