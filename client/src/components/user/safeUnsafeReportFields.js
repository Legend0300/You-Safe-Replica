import { useState , useEffect } from "react";
import DateSelector from "./DateSelector";

function SafeUnsafeReportForm() {
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [actType, setActType] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });
  const [areas, setAreas] = useState([]);

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


  const handlestartDateChange = (date) => {
    setStartDate(date);
    console.log(date);
  };


  const handleDepartmentChange = (event) => {
    const selectedDepartmentData = departments.find(department => department._id === event.target.value);
    setSelectedDepartment(selectedDepartmentData.department);
  };

  const handleAreaChange = (event) => {
    const selectedAreaData = areas.find(area => area._id === event.target.value);
    setSelectedArea(selectedAreaData.name);
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
    console.log({
      selectedDepartment,
      selectedArea,
      actType,
      userType,
      reportedStatus,
      reportDate,
      startDate,
      endDate,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      Start Date:
            <DateSelector selectedDate={selectedDate} onDateChange={handlestartDateChange} />
           <div>
        <label>
          Area:
          <select value={selectedArea.name} onChange={handleAreaChange}>
            <option value="">Select a Area</option>
            {areas.map((area) => (
              <option key={area._id} value={area._id}>
                {area.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Department:
          <select value={selectedDepartment.department} onChange={handleDepartmentChange}>
            <option value="">Select a department</option>
            {departments.map((department) => (
              <option key={department._id} value={department._id}>
                {department.department}
              </option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label htmlFor="actType">Act Type:</label>
        <select onChange={handleActTypeChange} value={actType} name="actType" id="actType">
          <option value="">Select Act Type</option>
          <option value="safe">Safe</option>
          <option value="unsafe">Unsafe</option>
        </select>
      </div>
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
        <select onChange={handleReportedStatusChange}  handleReportedStatusChange value={reportedStatus} name="reportedStatus" id="reportedStatus">
          <option value="">Select Reported Status</option>
          <option value="Completed">Completed</option>
          <option value="In Progress">In Progress</option>
          <option value="Pending">Pending</option>
        </select>
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

export default SafeUnsafeReportForm;