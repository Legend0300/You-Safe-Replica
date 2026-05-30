import { useState, useEffect } from "react";
import SiteField from "../common/siteField";
import StatusSelector from "../common/statusSelector";
import DateSelector from "../common/DateSelector";
import UserType from "../common/userTypeField";
import { Link  } from "react-router-dom";
import { useLocation, useParams , Outlet , useOutletContext } from "react-router-dom";
import { FormControl, RadioGroup, Radio, TextField, Select, MenuItem, Button, Typography, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import { ThemeProvider } from '@mui/material/styles';
import appTheme from '../../theme';
import FormLayout from '../common/FormLayout';



function PIReportsForm() {
  const [selectedSite, setSelectedSite] = useState({ siteName: "" });
  const [formCompliant, setFormCompliant] = useState("");
  const [remarks, setRemarks] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [managers, setManagers] = useState([]);
  const [responsibility, setResponsibility] = useState("");

  const location = useLocation();

  const [questions, setQuestions] = useState([]);
  const formName = location.pathname.split("/").pop().replaceAll("%20", " ");
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/api/pi");
      const data = await response.json();

      const matchingDCA = data.find((pi) => pi.formName === formName);

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
    // console.log();
    const fetchManagers = async () => {
      console.log("fetching managers");
      const response = await fetch("http://localhost:4000/api/areaManager");
      const data = await response.json();
      setManagers(data);
      // console.log(data);
    };
    fetchManagers();
  }, []);

  const handleSelectSite = (selectedSite) => {
    setSelectedSite(selectedSite);
  };



  const handleUserTypeChange = (event) => {
    setUserType(event);
  };
  const handleFormCompliantChange = (event) => {
    setFormCompliant(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

 

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event.target.value);
  };

  const handleReportDateChange = (event) => {
    setReportDate(event);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
  };

  const handleResponsibilityChange = (event) => {
    setResponsibility(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      formName,
      Heading,
      Question,
      formCompliant,
      remarks,
      reportedStatus,
      responsibility,
    });

    //reset
    setFormCompliant("");
    setRemarks("");
    setReportedStatus("");
    setResponsibility("");
    setReportedStatus("");

  };

  return (
    <ThemeProvider theme={appTheme}>
      <FormLayout>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Box>
            <Typography variant="overline" sx={{ color: 'secondary.dark', fontWeight: 700, letterSpacing: 2 }}>
              Planned Inspection
            </Typography>
            <Typography variant="h4">{formName || 'Checklist'}</Typography>
          </Box>
          <Box sx={{ bgcolor: 'rgba(255,183,3,0.10)', borderRadius: 2, p: 2 }}>
            <Typography variant="subtitle2" color="text.secondary">{Heading}</Typography>
            <Typography variant="h6">{Question}</Typography>
          </Box>

          <FormControl component="fieldset">
            <RadioGroup
              name="Suitability"
              value={formCompliant}
              onChange={handleFormCompliantChange}
              row
            >
              <FormControlLabel value="complaint" control={<Radio />} label="Complaint" />
              <FormControlLabel value="no-complaint" control={<Radio />} label="No Complaint" />
            </RadioGroup>
          </FormControl>
  
          <TextField
            onChange={handleReportedStatusChange}
            type="text"
            name="Status"
            label="Status"
            variant="outlined"
          />
  
          <TextField
            onChange={handleRemarksChange}
            type="text"
            name="remarks"
            label="Action/Remarks"
            variant="outlined"
          />
  
          <FormControl>
            <Select
              name="responsibility"
              value={responsibility}
              onChange={handleResponsibilityChange}
              displayEmpty
              variant="outlined"
            >
              <MenuItem value="">
                <em>Select Manager</em>
              </MenuItem>
              {managers.map((manager) => (
                <MenuItem key={manager._id} value={manager.fullName}>
                  {manager.fullName}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Button
              type="button"
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              variant="outlined"
            >
              Back
            </Button>
            <Button
              type="button"
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
              variant="outlined"
            >
              Skip
            </Button>
            <Button type="submit" variant="contained" color="secondary" sx={{ ml: 'auto' }}>
              Submit
            </Button>
          </Box>
          <Link to="/newreport/planned-inspection" style={{ color: '#52606D' }}>Back to base page</Link>
        </form>
      </FormLayout>
    </ThemeProvider>
  );
}

export default PIReportsForm;
