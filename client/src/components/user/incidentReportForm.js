import { useState } from "react";
import AreaField from "../common/AreaField";
import DepartmentField from "../common/DepartmentField";
import UserType from "../common/userTypeField";
import DateSelector from "../common/DateSelector";

function IncidentReportForm() {
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
    setUserType(event.target.value);
  };

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event.target.value);
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
    setEventType("");
    setEventSubType("");
    setUserType("");
    setReportedStatus("");
    setStartDate("");
    setEndDate("");

  };

  return (
    <form onSubmit={handleSubmit}>
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

      <UserType onChange={handleUserTypeChange}/>

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
        <DateSelector selectedDate={startDate} onDateChange = {handleStartDateChange}/>
        
        <DateSelector selectedDate={endDate} onDateChange = {handleEndDateChange}/>
        
        <button type="submit">Submit</button>
    </form>
    );
}

export default IncidentReportForm;