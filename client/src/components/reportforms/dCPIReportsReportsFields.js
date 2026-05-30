import { useState, useEffect } from 'react';
import {
  useLocation,
  useParams,
  Outlet,
  useOutletContext,
} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import {
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Select,
  MenuItem,
  Button,
  Box,
  Typography,
} from '@mui/material';
import FormLayout from '../common/FormLayout';

function DCPIReportsForm() {
  const location = useLocation();
  const [formCompliant, setFormCompliant] = useState('');
  const [remarks, setRemarks] = useState('');
  const [reportedStatus, setReportedStatus] = useState('');
  const [managers, setManagers] = useState([]);
  const [responsibility, setResponsibility] = useState('');
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const formName = location.pathname.split('/').pop().replaceAll('%20', ' ');

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch('http://localhost:4000/api/dca');
      const data = await response.json();

      const matchingDCA = data.find((dca) => dca.formName === formName);
      if (matchingDCA) {
        setQuestions(matchingDCA.questions);
      }
    };

    fetchQuestions();
  }, [formName]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const { Heading, Question } = currentQuestion || {};

  useEffect(() => {
    const fetchManagers = async () => {
      console.log('fetching managers');
      const response = await fetch('http://localhost:4000/api/areaManager');
      const data = await response.json();
      setManagers(data);
    };
    fetchManagers();
  }, []);

  const handleFormCompliantChange = (event) => {
    setFormCompliant(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event.target.value);
  };

  const handleResponsibilityChange = (event) => {
    setManagers(event.target.value);
    setResponsibility(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      formName,
      Heading,
      Question,
      formCompliant,
      remarks,
      reportedStatus,
      responsibility,
    };

    try {
      const response = await fetch('http://localhost:4000/api/dca', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data successfully submitted:', data);

        // Reset form fields
        setFormCompliant('');
        setRemarks('');
        setReportedStatus('');
        setResponsibility('');
      } else {
        console.log('Error submitting form data:', response.status);
      }
    } catch (error) {
      console.log('Error submitting form data:', error);
    }

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <FormLayout>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box>
          <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: 2 }}>
            Deep Compliance Audit
          </Typography>
          <Typography variant="h4">{formName || 'Checklist'}</Typography>
        </Box>
        <Box sx={{ bgcolor: 'rgba(255,183,3,0.10)', borderRadius: 2, p: 2 }}>
          <Typography variant="subtitle2" color="text.secondary">{Heading}</Typography>
          <Typography variant="h6">{Question}</Typography>
        </Box>

        <RadioGroup
          aria-label="Suitability"
          name="Suitability"
          value={formCompliant}
          onChange={handleFormCompliantChange}
          row
        >
          <FormControlLabel value="complaint" control={<Radio />} label="Compliant" />
          <FormControlLabel value="no-complaint" control={<Radio />} label="No Compliant" />
        </RadioGroup>

        <TextField label="Status" variant="outlined" name="Status" onChange={handleReportedStatusChange} />
        <TextField label="Action/Remarks" variant="outlined" name="remarks" multiline minRows={2} onChange={handleRemarksChange} />

        <Select
          name="responsibility"
          value={responsibility}
          onChange={handleResponsibilityChange}
          variant="outlined"
          displayEmpty
        >
          <MenuItem value="">Select Manager</MenuItem>
          {Array.isArray(managers) &&
            managers.map((manager) => (
              <MenuItem key={manager._id} value={manager.fullName}>
                {manager.fullName}
              </MenuItem>
            ))}
        </Select>

        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button type="button" onClick={handleBack} disabled={currentQuestionIndex === 0} variant="outlined">
            Back
          </Button>
          <Button type="button" onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1} variant="outlined">
            Skip
          </Button>
          <Button type="submit" variant="contained" color="secondary" sx={{ ml: 'auto' }}>
            Next
          </Button>
        </Box>
        <Link to={`/newreport/dca`} style={{ color: '#52606D' }}>Back to base page</Link>
      </form>
    </FormLayout>
  );
}

export default DCPIReportsForm;
