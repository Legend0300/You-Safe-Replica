import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemButton, ListItemText, ListItemIcon, Paper, Box } from '@mui/material';
import Nav from '../common/Nav';
import SimpleBottomNavigation from '../common/Bottom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';

const reportingTypes = [
  { name: 'Safe/Unsafe Acts', path: '/safeusafereport', icon: <HealthAndSafetyOutlinedIcon />, desc: 'Log safe or unsafe behaviours observed on site' },
  { name: 'Hazard Reporting', path: '/hazardreport', icon: <WarningAmberOutlinedIcon />, desc: 'Flag a hazard before it causes harm' },
  { name: 'Incident Reporting', path: '/incidentreport', icon: <ReportProblemOutlinedIcon />, desc: 'Record an incident or near-miss event' },
  { name: 'Deep Compliance Reporting', path: '/dca', icon: <FactCheckOutlinedIcon />, desc: 'Run a deep compliance audit checklist' },
  { name: 'Planned Inspection', path: '/planned-inspection', icon: <ChecklistRtlOutlinedIcon />, desc: 'Complete a scheduled planned inspection' },
  { name: 'Safety Action Meeting (SAM)', path: '/safetyactionmeeting', icon: <Groups2OutlinedIcon />, desc: 'Document a safety action meeting' },
];

const ReportingTypePage = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Nav />
      <Container maxWidth="sm" sx={{ flex: 1, py: { xs: 3, md: 5 } }}>
        <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: 2 }}>
          New Report
        </Typography>
        <Typography variant="h4" sx={{ mb: 0.5 }}>
          Select Reporting Type
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Choose the type of safety report you want to submit.
        </Typography>

        <Paper elevation={0} sx={{ overflow: 'hidden', border: '1px solid', borderColor: 'divider' }}>
          <List disablePadding>
            {reportingTypes.map((type, i) => (
              <ListItem
                key={type.name}
                disablePadding
                divider={i < reportingTypes.length - 1}
                secondaryAction={<ArrowForwardIosIcon fontSize="small" sx={{ color: 'text.secondary' }} />}
              >
                <ListItemButton
                  component={Link}
                  to={`/newreport${type.path}`}
                  sx={{
                    py: 1.75,
                    borderLeft: '4px solid transparent',
                    transition: 'all .15s ease',
                    '&:hover': { bgcolor: 'rgba(255,183,3,0.10)', borderLeftColor: 'secondary.main' },
                  }}
                >
                  <ListItemIcon sx={{ color: 'primary.main', minWidth: 44 }}>{type.icon}</ListItemIcon>
                  <ListItemText
                    primary={type.name}
                    secondary={type.desc}
                    primaryTypographyProps={{ fontWeight: 600 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
      <SimpleBottomNavigation />
    </Box>
  );
};

export default ReportingTypePage;
