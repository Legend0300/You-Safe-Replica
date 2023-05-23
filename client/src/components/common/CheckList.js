import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Outlet, Routes, Route } from 'react-router-dom';
import { Container, Typography, Link as MuiLink, Box, ThemeProvider, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Create a custom MUI theme with yellow and white colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#000000', // black
    },
    secondary: {
      main: '#ffff00', // yellow
    },
    background: {
      default: '#ffff00', // yellow
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#ffffff', // white
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#000000', // black
        },
      },
    },
  },
});

const QuestionContainer = ({ children }) => (
  <Paper
    elevation={3}
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px',
      marginBottom: '16px',
    }}
  >
    {children}
  </Paper>
);

const ChecklistMap = ({ checklist, type }) => {
  console.log(type);
  return (
    <div>
      <Typography variant="h6" component="label" htmlFor="form-name">
        Form Name:
      </Typography>
      {checklist.map((checklist) => (
        <QuestionContainer key={checklist.id}>
          <Typography variant="body1">{checklist.formName}</Typography>
          {type === "dca" || type === "pi" ? (
          <MuiLink component={Link} to={`${checklist.formName}`}>
            <ArrowForwardIosIcon fontSize="medium" />
            </MuiLink>
              ) : null}
        </QuestionContainer>
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
