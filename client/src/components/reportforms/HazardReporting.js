import { useState, useRef } from 'react';

function HazardReportingForm(props) {
  const [desc, setDesc] = useState('');
  const [department, setDepartment] = useState('');
  const [area, setArea] = useState('');
  const [resp, setResp] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [reportTime, setReportTime] = useState('');
  const [photo, setPhoto] = useState('');
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.click();
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setDepartment(event.target.value);
  };

  const handleAreaChange = (event) => {
    setArea(event.target.value);
  };

  const handleRespChange = (event) => {
    setResp(event.target.value);
  };

  const handleReportDateChange = (event) => {
    setReportDate(event.target.value);
  };

  const handleReportTimeChange = (event) => {
    setReportTime(event.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to handle form submission
    const obj = {
      department,
      area,
      desc,
      reportDate,
      reportTime,
      photo,
      resp,
    };
    console.log('Form submitted');
    console.log(obj);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Hazard Reporting</h1>
      <div>
        <label htmlFor="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          value={department}
          onChange={handleDepartmentChange}
          required
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
        />
      </div>
      <div>
        <label htmlFor="site">Description:</label>
        <input
          type="text"
          id="site"
          name="site"
          value={desc}
          onChange={handleDescChange}
          required
        />
      </div>
      <div>
        <label htmlFor="reportDate">Report Date:</label>
        <input
          type="date"
          id="reportDate"
          name="reporttDate"
          value={reportDate}
          onChange={handleReportDateChange}
          max={new Date().toISOString().split('T')[0]}
          validationMessage="Report date cannot be in the future"
          required
        />
      </div>
      <div>
        <label htmlFor="reportTime">Report Time</label>
        <input
          type="time"
          id="reportTime"
          name="reportTime"
          value={reportTime}
          onChange={handleReportTimeChange}
          required
        />
      </div>
      <div>
        <button onClick={handleClick} type="button">
          Upload photo
        </button>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleFileChange}
          required
        />
      </div>
      <div>
        <label htmlFor="resp">Responsibilities:</label>
        <input
          type="text"
          id="resp"
          name="resp"
          value={resp}
          onChange={handleRespChange}
          required
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}

export default HazardReportingForm;
