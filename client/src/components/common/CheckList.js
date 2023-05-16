import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Outlet, Routes, Route } from 'react-router-dom';
import { Container, Typography, Link as MuiLink, Box, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";

// Create a custom MUI theme with yellow and white colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#ffff00', // yellow
    },
    background: {
      default: '#ffffff', // white
    },
  },
});

const ChecklistMap = ({ checklist, type }) => {
  console.log(type);
  return (
    <div>
      <Typography variant="h6" component="label" htmlFor="form-name">
        Form Name:
      </Typography>
      {checklist.map((checklist) => (
        <Box key={checklist.id} display="flex" justifyContent="center" marginBottom={2}>
          {type === "dca" || type === "pi" ? (
            <MuiLink component={Link} to={`${checklist.formName}`}>
              {checklist.formName}
            </MuiLink>
          ) : null}
        </Box>
      ))}
    </div>
  );
};

const CheckList = (props) => {
  const [checklist, setChecklist] = useState([]);
  console.log(props.type[0]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/api/${props.type[0]}`);
      const data = await response.json();
      setChecklist(data);
    };
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Checklist
        </Typography>
        <Typography variant="h4" component="h2">
          Nav:
        </Typography>
        <Box marginBottom={2}>
          <MuiLink component={Link} to="/">
            Back to Checklist
          </MuiLink>
        </Box>
        <Routes>
          <Route
            path="/"
            element={<ChecklistMap type={props.type[0]} checklist={checklist} />}
          />
          <Route path=":name" element={<DCPIReportsForm />} />
          <Route path="/*" element={<>404 not found!</>} />
        </Routes>
      </Container>
    </ThemeProvider>
  );
};

export default CheckList;
