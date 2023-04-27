import { useState } from "react";
import SiteField from "../common/siteField";
import StatusSelector from "../common/statusSelector";
import DateSelector from "../common/DateSelector";
import UserType from "../common/userTypeField";


function DCPIReportsForm() {
  // const [site, setSite] = useState("");
  const [selectedSite,setSelectedSite] = useState({siteName:""});
  const [formCompliant, setFormCompliant] = useState(false);
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSelectSite = (selectedSite) => {
    setSelectedSite(selectedSite);
    // Fetch departments data for the selected site from backend API
  };
  // const handleSiteChange = (event) => {
  //   setSite(event.target.value);
  // };

  const handleFormCompliantChange = (event) => {
    setFormCompliant(event.target.checked);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event);
  };

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event);
  };

  const handleReportDateChange = (event) => {
    setReportDate(event);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    console.log({selectedSite,formCompliant,userType,reportedStatus,reportDate,startDate,endDate});
  };

  return (
    <form onSubmit={handleSubmit}>
        <h1>DCPI Reports</h1>
      <SiteField onSelectSite={handleSelectSite}/>
      
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
      <UserType userType={userType} onUserTypeChange={handleUserTypeChange}/>

      <StatusSelector status={reportedStatus} setStatus={handleReportedStatusChange}/>

      <DateSelector selectedDate={reportDate} onDateChange={handleReportDateChange}/>
      
      <DateSelector selectedDate={startDate} onDateChange={handleStartDateChange}/>

      <DateSelector selectedDate={endDate} onDateChange={handleEndDateChange}/>

      <button type="submit">Submit</button>
    </form>
  );
}

export default DCPIReportsForm;
