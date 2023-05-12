import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportDetails from './reportDetails';

const ReportingPage = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);

  // Fetch reports from API
  useEffect(() => {
    const fetchReports = async () => {
      const response = await fetch('http://localhost:4000/api/reports');
      const data = await response.json();
      setReports(data);
    };

    fetchReports();
  }, []);

  const submittedReports = reports.filter((report) => report.reportedStatus === 'reported');
  const emptyString = '';

  const handleViewDetails = (report) => {
    setSelectedReport(report);
  };

  return (
    <div>
      <h1>My Reporting</h1>
      <h2>Submitted Reports</h2>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <div>
              <p>Report Image: {report.img}</p>
              <p>Type: {report.type}</p>
              <p>Assigned To: {report.responsibility || emptyString}</p>
              <p>Reported Status: {report.reportedStatus || emptyString}</p>
              <p>Due Date: {report.dueDate || emptyString}</p>
            </div>
            <button onClick={() => handleViewDetails(report)}>View Details</button>
          </li>
        ))}
      </ul>

      {selectedReport ? (
        <ReportDetails report={selectedReport} />
      ) : (
        <div>Select a report to view details</div>
      )}

      <Link to="/newreport">+</Link>
    </div>
  );
};

export default ReportingPage;