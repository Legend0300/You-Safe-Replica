import { useState } from "react";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import UserType from "../common/userTypeField";
import DateSelector from "../common/DateSelector";
import StatusSelector from "../common/statusSelector";

function IncidentReportForm(props) {
  // const [departments, setDepartments] = useState([]);
  // const [areas, setAreas] = useState([]);
  const [eventType, setEventType] = useState("");
  const [eventSubType, setEventSubType] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });


  const handleSelectDepartment = (selectedDepartment)=>{
    setSelectedDepartment(selectedDepartment);
    console.log(selectedDepartment);
  }

  const handleSelectArea = (selectedArea)=>{
    setSelectedArea(selectedArea);
    console.log(selectedArea);
  }

  const handleEventTypeChange = (event) => {
    setEventType(event.target.value);
  };

  const handleEventSubTypeChange = (event) => {
    setEventSubType(event.target.value);
  };

  const handleUserTypeChange = (event) => {
    setUserType(event);
  };

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event);
  };


  const handleStartDateChange = (event) => {
    setStartDate(event);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to handle the form submission
    console.log({
      selectedDepartment,
      selectedArea,
      eventType,
      eventSubType,
      userType,
      reportedStatus,
      startDate,
      endDate
    });

    // reset form
    // setDepartments([]);
    // setAreas([]);
    setSelectedDepartment("");
    setSelectedArea("");
    setEventType("");
    setEventSubType("");
    setUserType("");
    setReportedStatus("");
    setStartDate("");
    setEndDate("");

  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Incident Report Form</h1>
      <AreaField onSelectArea={handleSelectArea}/>
      
      <DepartmentField onSelectDepartment={handleSelectDepartment}/>
      <div>
        <label htmlFor="eventType">Event Type:</label>
        <input
          type="text"
          id="eventType"
          name="eventType"
          value={eventType}
          onChange={handleEventTypeChange}
        />
      </div>
      <div>
        <label htmlFor="eventSubType">Event Sub Type:</label>
        <input
          type="text"
          id="eventSubType"
          name="eventSubType"
          value={eventSubType}
          onChange={handleEventSubTypeChange}
        />
      </div>
        <UserType userType={userType} onUserTypeChange={handleUserTypeChange}/>

        <StatusSelector status={reportedStatus} setStatus={handleReportedStatusChange}/>

        <DateSelector selectedDate={startDate} onDateChange={handleStartDateChange} />

        <DateSelector selectedDate={endDate} onDateChange={handleEndDateChange} />
      
        <button type="submit">Submit</button>
    </form>
    );
}

export default IncidentReportForm;