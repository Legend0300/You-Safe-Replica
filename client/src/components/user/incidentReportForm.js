import { useState , useEffect} from "react";
import AreaField from "./common/AreaField";
import DepartmentField from "./common/DepartmentField";
import UserType from "./common/userTypeField";
import DateSelector from "./common/DateSelector";

function IncidentReportForm(props) {
  const [departments, setDepartments] = useState([]);
  const [areas, setAreas] = useState([]);
  const [eventType, setEventType] = useState("");
  const [eventSubType, setEventSubType] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });

  useEffect(() => {
  fetch(`http://localhost:4000/api/department`)
  .then((response) => response.json())
  .then((data) => setDepartments(data))
  .catch((error) => console.error(error));

}, []);

useEffect(() => {
  // Fetch areas data for the selected department from backend API
  fetch(`http://localhost:4000/api/area`)
    .then((response) => response.json())
    .then((data) => setAreas(data))
    .catch((error) => console.error(error));
}, []);

const handleSelectDepartment = (selectedDepartment)=>{
  setSelectedDepartment(selectedDepartment);
  console.log(selectedDepartment);
}

const handleSelectArea = (selectedArea)=>{
  setSelectedArea(selectedArea);
  console.log(selectedArea);
}
const handleDepartmentChange = (event) => {
  const selectedDepartmentData = departments.find(department => department._id === event.target.value);
  setSelectedDepartment(selectedDepartmentData.department);
};
 
const handleAreaChange = (event) => {
  const selectedAreaData = areas.find(area => area._id === event.target.value);
  setSelectedArea(selectedAreaData.name);
};

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
    setDepartments([]);
    setAreas([]);
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
      <userType onChange={handleUserTypeChange}/>
      <div>
  <label htmlFor="userType">User Type:</label>
  <select id="userType" name="userType" value={userType} onChange={handleUserTypeChange}>
    <option value="">Select User Type</option>
    <option value="employee">Employee</option>
    <option value="visitor">Visitor</option>
    <option value="admin">Admin</option>
    <option value="areaManager">Area Manager</option>
  </select>
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

export default IncidentReportForm;