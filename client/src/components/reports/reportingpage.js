import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportDetails from './reportDetails';
import { Box, Typography, Button, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@material-ui/core/styles';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    subtitle1: {
      fontSize: '16px',
      lineHeight: '1.5',
    },
  },
});

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleViewDetails = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };

  console.log(reports);
  return (
    <ThemeProvider theme={theme}>
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
        <CardMedia
          style={{
            marginTop: '2%',
            marginBottom: '2%',
            backgroundColor: 'transparent',
          }}
        >
          <Typography variant="h6" component="h6" gutterBottom>
            Submitted Reports {reports.length}
          </Typography>
          <Typography variant="h6" component="h6" gutterBottom>
            Offline Reports 0
          </Typography>
        </CardMedia>
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
                maxWidth: 450,
                maxHeight: 400,
                flexWrap: 'wrap',
                marginBottom: 3,
              }}
            >
              <Box sx={{ display: 'flex', width: 450, height: 150 }}>
                <CardMedia
                  component="img"
                  sx={{ width: 150, height: 150 }}
                  image={
                    'https://ichef.bbci.co.uk/news/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg' ||
                    report.img
                  }
                  alt="Live from space album cover"
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: 300,
                  }}
                >
                  <CardContent sx={{ flex: '1 0 auto', padding: '15px 30px' }}>
                    <Typography variant="subtitle1" color="text.secondary">
                      Status: {report.status || 'N/A'}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Assigned To: {report.responsibility || ''}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Type: {report.type}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                      Due Date: {report.endDate || 'N/A'}
                    </Typography>
                  </CardContent>
                </Box>
              </Box>

              <Button
                variant="contained"
                onClick={() => handleViewDetails(report, open)}
                sx={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  color: '#ffb300',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgb(233, 226, 164)',
                  },
                }}
              >
                View Details
              </Button>
            </Card>
          ))}
        </Stack>

        {selectedReport ? (
          <ReportDetails report={selectedReport} setOpen={setOpen} />
        ) : (
          <Typography variant="body1" gutterBottom>
            Select a report to view details
          </Typography>
        )}

        <Link to="/newreport">
          <AddIcon
            sx={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              zIndex: '9999',
              backgroundColor: '#ffb300',
              color: 'white',
              borderRadius: '100%',
              fontSize: '32px',
              width: '48px',
              height: '48px',
            }}
          />
        </Link>
      </Box>
    </ThemeProvider>
  );
};

export default ReportingPage;
