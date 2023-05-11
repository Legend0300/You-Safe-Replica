import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReportingPage = () => {
  const [reports, setReports] = useState([]);

  // fetch reports from API
  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('http://localhost:4000/api/reports');
      const data = await response.json();
      setReports(data);
    };

    fetchReports();
  }, []);

  const submittedReports = reports.filter(report => report.reportedStatus === 'reported');
  const emptyString = '';

  return (
    <div>
      <h1>My Reporting</h1>

      {/* <p>Total Submitted Reports: {submittedReports.length}</p> */}

      <h2>Submitted Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
              <div>
                <p>Report Image: {report.img}</p>
                <p>Type: {report.type}</p>
                <p>Act Type: {report.actType || emptyString}</p>
                <p>Reported Status: {report.reportedStatus || emptyString}</p>
                <p>Due Date: {report.endDate || emptyString}</p>
              </div>
            


            <button>View Details</button>
          </li>
        ))}
      </ul>

      <Link to="/newreport">+</Link>
    </div>
  );
};

export default ReportingPage;
