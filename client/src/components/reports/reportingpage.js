import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ReportingPage = () => {
  const [reports, setReports] = useState([]);

  // fetch reports from API
  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('http://localhost:4000/api/reports');
      // const data = await response.json();
      setReports(response.json);
    };

    fetchReports();
  }, []);

  const submittedReports = reports.filter(report => report.status === 'submitted');
  const offlinePendingReports = reports.filter(report => report.status === 'offline_pending');

  return (
    <div>
      <h1>My Reporting</h1>

      <p>Total Submitted Reports: {submittedReports.length}</p>
      <p>Offline Pending Reports: {offlinePendingReports.length}</p>

      <h2>Submitted Reports</h2>
      <ul>
        {reports.map(({ id, picture, status, type, assignedTo, dueDate }) => (
          <li key={id}>
            <img src={picture} alt="Report" />
            <p>Status: {status}</p>
            <p>Type: {type}</p>
            <p>Assigned to: {assignedTo}</p>
            <p>Due Date: {dueDate}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>

      <Link to="/newreport">+</Link>
    </div>
  );
};

export default ReportingPage;
