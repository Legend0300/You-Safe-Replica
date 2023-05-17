import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportDetails from './reportDetails';
import { Box, Typography, Button } from '@mui/material';
import { yellow } from '@mui/material/colors';
import { useTheme } from '@mui/material/styles';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Stack from '@mui/material/Stack';

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

  const submittedReports = reports.filter(
    (report) => report.reportedStatus === 'reported'
  );
  const emptyString = '';

  const handleViewDetails = (report) => {
    setSelectedReport(report);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
    >
      <Typography variant="h4" component="h4" gutterBottom>
        My Reporting
      </Typography>
      <Typography variant="h4" component="h4" gutterBottom>
        Submitted Reports
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          spacing: 2,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignContent: 'space-around',
          alignItems: 'center',
          
        }}
        
      >
        {reports.map((report) => (
          <Card
            key={report._id}
            sx={{
              display: 'flex',
              maxWidth: 400,
              maxHeight: 400,
              flexWrap: 'wrap',
              marginBottom: 3,
            }}
          >
            <CardMedia
              component="img"
              sx={{ width: 150 }}
              image={
                'https://ichef.bbci.co.uk/news/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg' ||
                report.img
              }
              alt="Live from space album cover"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width: 250 }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Status: {report.reportedStatus || 'N/A'}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Assigned To: {report.responsibility || 'N/A'}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Type: {report.type}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Due Date: {report.dueDate || 'N/A'}
                </Typography>
              </CardContent>
            </Box>

            <Button
              variant="contained"
              onClick={() => handleViewDetails(report)}
            >
              View Details
            </Button>
          </Card>
        ))}
      </Stack>

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
