import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReportDetails from './reportDetails';
import {
  Box, Container, Typography, Button, Chip, Avatar, Stack, Fab, Paper,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Nav from '../common/Nav';

const STATUS_COLOR = {
  'In Progress': 'warning',
  Pending: 'default',
  Completed: 'success',
  Enabled: 'info',
  Disabled: 'default',
  reported: 'success',
};

const typeMeta = (type = '') => {
  const t = type.toLowerCase();
  if (t.includes('hazard')) return { icon: <WarningAmberOutlinedIcon />, color: '#E0A100' };
  if (t.includes('safe')) return { icon: <HealthAndSafetyOutlinedIcon />, color: '#2E9E5B' };
  if (t.includes('incident')) return { icon: <ReportProblemOutlinedIcon />, color: '#D64545' };
  if (t === 'dca') return { icon: <FactCheckOutlinedIcon />, color: '#3B7DD8' };
  if (t === 'pi') return { icon: <ChecklistRtlOutlinedIcon />, color: '#7A5AF8' };
  if (t.includes('meeting')) return { icon: <Groups2OutlinedIcon />, color: '#1B232B' };
  return { icon: <DescriptionOutlinedIcon />, color: '#52606D' };
};

const MetaRow = ({ icon, children }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
    {React.cloneElement(icon, { sx: { fontSize: 18 } })}
    <Typography variant="body2" noWrap>{children}</Typography>
  </Box>
);

const ReportingPage = () => {
  const [reports, setReports] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/reports');
        const data = await response.json();
        setReports(Array.isArray(data) ? data : []);
      } catch (e) {
        setReports([]);
      }
    };
    fetchReports();
  }, []);

  const handleViewDetails = (report) => {
    setSelectedReport(report);
    setOpen(true);
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav />
      <Container maxWidth="lg" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: 2 }}>
          Safety Reports
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>My Reporting</Typography>

        <Stack direction="row" spacing={1.5} sx={{ mb: 4 }}>
          <Chip label={`Submitted ${reports.length}`} color="primary" sx={{ fontWeight: 600 }} />
          <Chip label="Offline 0" variant="outlined" sx={{ fontWeight: 600 }} />
        </Stack>

        {reports.length === 0 ? (
          <Paper elevation={0} sx={{ p: 6, textAlign: 'center', border: '1px dashed', borderColor: 'divider' }}>
            <DescriptionOutlinedIcon sx={{ fontSize: 48, color: 'text.secondary', mb: 1 }} />
            <Typography variant="h6">No reports yet</Typography>
            <Typography variant="body2" color="text.secondary">Tap the + button to create your first report.</Typography>
          </Paper>
        ) : (
          <Box
            sx={{
              display: 'grid',
              gap: 2.5,
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
            }}
          >
            {reports.map((report, index) => {
              const meta = typeMeta(report.type);
              const status = report.status || report.reportedStatus;
              return (
                <Paper
                  key={report._id || index}
                  elevation={0}
                  sx={{
                    overflow: 'hidden',
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform .18s ease, box-shadow .18s ease',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 14px 32px rgba(27,35,43,0.14)' },
                  }}
                >
                  <Box sx={{ p: 2.5, flex: 1, display: 'flex', flexDirection: 'column', gap: 1.25 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                      <Avatar variant="rounded" sx={{ bgcolor: `${meta.color}1A`, color: meta.color, width: 44, height: 44 }}>
                        {meta.icon}
                      </Avatar>
                      {status && (
                        <Chip label={status} size="small" color={STATUS_COLOR[status] || 'default'} sx={{ fontWeight: 600 }} />
                      )}
                    </Box>
                    <Typography variant="h6" sx={{ lineHeight: 1.2 }}>
                      {report.formName || report.type}
                    </Typography>
                    <Stack spacing={0.75} sx={{ mt: 0.5 }}>
                      <MetaRow icon={<PersonOutlineIcon />}>{report.responsibility || 'Unassigned'}</MetaRow>
                      <MetaRow icon={<EventOutlinedIcon />}>Due {report.endDate || 'N/A'}</MetaRow>
                      {(report.department || report.area) && (
                        <MetaRow icon={<PlaceOutlinedIcon />}>
                          {[report.department, report.area].filter(Boolean).join(' · ')}
                        </MetaRow>
                      )}
                    </Stack>
                    <Button
                      onClick={() => handleViewDetails(report)}
                      variant="contained"
                      color="secondary"
                      size="small"
                      sx={{ mt: 'auto', alignSelf: 'flex-start' }}
                    >
                      View Details
                    </Button>
                  </Box>
                </Paper>
              );
            })}
          </Box>
        )}
      </Container>

      <ReportDetails report={selectedReport} open={open} onOpenChange={setOpen} />

      <Fab
        color="secondary"
        component={Link}
        to="/newreport"
        aria-label="New report"
        sx={{ position: 'fixed', bottom: 28, right: 28, color: 'primary.main' }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default ReportingPage;
