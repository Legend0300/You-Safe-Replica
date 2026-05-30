import React, { useState, useEffect } from "react";
import { Link, Routes, Route } from 'react-router-dom';
import { Container, Typography, Box, ThemeProvider, Paper, Button } from '@mui/material';
import appTheme from '../../theme';
import Nav from './Nav';
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ChecklistRtlOutlinedIcon from '@mui/icons-material/ChecklistRtlOutlined';

const TITLES = {
  dca: 'Deep Compliance Audit',
  pi: 'Planned Inspection',
};

const ChecklistMap = ({ checklist, type }) => (
  <Box>
    <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
      Available forms
    </Typography>
    {checklist.length === 0 ? (
      <Paper elevation={0} sx={{ p: 4, textAlign: 'center', border: '1px dashed', borderColor: 'divider' }}>
        <Typography color="text.secondary">No checklists available.</Typography>
      </Paper>
    ) : (
      checklist.map((item) => (
        <Paper
          key={item._id}
          component={Link}
          to={`${item.formName}`}
          elevation={0}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            mb: 1.5,
            textDecoration: 'none',
            color: 'text.primary',
            border: '1px solid',
            borderColor: 'divider',
            borderLeft: '4px solid transparent',
            transition: 'all .15s ease',
            '&:hover': { bgcolor: 'rgba(255,183,3,0.10)', borderLeftColor: 'secondary.main' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <ChecklistRtlOutlinedIcon sx={{ color: 'primary.main' }} />
            <Typography variant="body1" sx={{ fontWeight: 600 }}>{item.formName}</Typography>
          </Box>
          <ArrowForwardIosIcon fontSize="small" sx={{ color: 'text.secondary' }} />
        </Paper>
      ))
    )}
  </Box>
);

const CheckList = (props) => {
  const [checklist, setChecklist] = useState([]);
  const type = props.type[0];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/${type}`);
        const data = await response.json();
        setChecklist(Array.isArray(data) ? data : []);
      } catch (e) {
        setChecklist([]);
      }
    };
    fetchData();
  }, [type]);

  return (
    <ThemeProvider theme={appTheme}>
      <Box sx={{ minHeight: '100vh' }}>
        <Nav />
        <Container maxWidth="sm" sx={{ py: { xs: 3, md: 5 } }}>
          <Button component={Link} to="/newreport" startIcon={<ArrowBackIcon />} sx={{ mb: 2, color: 'text.secondary' }}>
            Back to report types
          </Button>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: 2 }}>
            Checklists
          </Typography>
          <Typography variant="h4" sx={{ mb: 3 }}>{TITLES[type] || 'Checklist'}</Typography>
          <Routes>
            <Route path="/" element={<ChecklistMap type={type} checklist={checklist} />} />
            <Route path=":name" element={<DCPIReportsForm />} />
            <Route path="/*" element={<>404 not found!</>} />
          </Routes>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default CheckList;
