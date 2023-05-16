import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportDetails from './reportDetails';
import { Box, Typography, Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

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
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="100vh">
      <Typography variant="h1" component="h1" gutterBottom>
        My Reporting
      </Typography>
      <Typography variant="h2" component="h2" gutterBottom>
        Submitted Reports
      </Typography>
      <ul>
        {reports.map((report) => (
          <li key={report._id}>
            <Box display="flex" alignItems="center">
              <div>
                <Typography variant="body1" gutterBottom>
                  Report Image: {report.img}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Type: {report.type}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Assigned To: {report.responsibility || "N/A"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Reported Status: {report.reportedStatus || "N/A"}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Due Date: {report.dueDate || "N/A"}
                </Typography>
              </div>
              <Button variant="contained" onClick={() => handleViewDetails(report)}>
                View Details
              </Button>
            </Box>
          </li>
        ))}
      </ul>
  
      {selectedReport ? (
        <ReportDetails report={selectedReport} />
      ) : (
        <Typography variant="body1" gutterBottom>
          Select a report to view details
        </Typography>
      )}
  
      <Link to="/newreport">+</Link>
    </Box>
  );
};

export default ReportingPage;