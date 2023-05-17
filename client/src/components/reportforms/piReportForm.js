import { useState, useEffect } from "react";
import SiteField from "../common/siteField";
import StatusSelector from "../common/statusSelector";
import DateSelector from "../common/DateSelector";
import UserType from "../common/userTypeField";
import { Link  } from "react-router-dom";
import { useLocation, useParams , Outlet , useOutletContext } from "react-router-dom";
import { FormControl, RadioGroup, Radio, TextField, Select, MenuItem, Button, Typography, FormControlLabel } from '@mui/material';
import { Box } from '@mui/system';
import { yellow, white , black } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';



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

  const theme = createTheme({
  
      primary: yellow[500],
      background: {
        default: "ffffff",
      },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <form onSubmit={handleSubmit}>
          <Typography variant="h3">DCA Reports</Typography>
          <Typography variant="h3">{formName} CheckList</Typography>
  
          <Typography variant="h3">Header: {Heading}</Typography>
          <Typography variant="h3">Question: {Question}</Typography>
  
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
                <MenuItem key={manager.id} value={manager.name}>
                  {manager.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
  
          <Button style={{background: "#ffc107" , color: "black"}} type="submit" variant="contained" >
            Submit
          </Button>
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
        </form>
        <Link to="/newreport/planned-inspection">Back to base page</Link>
      </Box>
    </ThemeProvider>
  );
}

export default PIReportsForm;
