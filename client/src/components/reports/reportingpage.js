import React, { useState } from 'react';
import ReportingTypePage from './reportingType';
import { Link , Outlet } from 'react-router-dom';

const ReportingPage = () => {
  const [submittedReports, setSubmittedReports] = useState([]);
  const [offlinePendingReports, setOfflinePendingReports] = useState([]);

  return (
    <div>
      <h1>My Reporting</h1>
      <p>Total Submitted Reports: {submittedReports.length}</p>
      <p>Offline Pending Reports: {offlinePendingReports.length}</p>
      <h2>Submitted Reports</h2>
      <ul>
        {submittedReports.map(report => (
          <li key={report.id}>
            <img src={report.picture} alt="Report" />
            <p>Status: {report.status}</p>
            <p>Type: {report.type}</p>
            <p>Assigned to: {report.assignedTo}</p>
            <p>Due Date: {report.dueDate}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
      <h2>Offline Pending Reports</h2>
      <ul>
        {offlinePendingReports.map(report => (
          <li key={report.id}>
            <img src={report.picture} alt="Report" />
            <p>Status: {report.status}</p>
            <p>Type: {report.type}</p>
            <p>Assigned to: {report.assignedTo}</p>
            <p>Due Date: {report.dueDate}</p>
            <button>View Details</button>
          </li>
        ))}
      </ul>
      <Link to="/reports/addreport">+</Link>
      <Outlet />
    </div>
  );
};

export default ReportingPage;
