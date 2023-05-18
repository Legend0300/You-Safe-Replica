import { useState, useEffect } from "react";
import { useLocation, useParams , Outlet , useOutletContext } from "react-router-dom";
import { Link, useNavigate  } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { 
  TextField, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  Select, 
  MenuItem,
  Button 
} from "@material-ui/core";




function DCPIReportsForm() {
  const location = useLocation();
  const [formCompliant, setFormCompliant] = useState("");
  const [remarks, setRemarks] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [managers, setManagers] = useState([]);
  const [responsibility, setResponsibility] = useState("");
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([]);
  const formName = location.pathname.split("/").pop().replaceAll("%20", " ");
  
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/api/dca");
      const data = await response.json();
      
      const matchingDCA = data.find((dca) => dca.formName === formName);
      if (matchingDCA) {
        setQuestions(matchingDCA.questions);
      }
    };
    
    fetchQuestions();
  }, [formName]);
    
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  console.log(questions);
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
      console.log("fetching managers");
      const response = await fetch("http://localhost:4000/api/areaManager");
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




  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
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


  const useStyles = makeStyles((theme) => ({
    formContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#fff",
      padding: theme.spacing(2),
      borderRadius: theme.spacing(1),
      boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.1)",
    },
    formInput: {
      marginBottom: theme.spacing(2),
    },
    formLabel: {
      fontWeight: "bold",
      marginBottom: theme.spacing(1),
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: theme.spacing(2),
      width: "100%",
    },
    button: {
      marginRight: theme.spacing(1),
    },
  }));
  
    const classes = useStyles();
  
    return (
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <h1>DCA Reports</h1>
          <h1>{formName} CheckList</h1>
  
          <h1>Header: {Heading}</h1>
          <h1>Question: {Question}</h1>
  
          <RadioGroup
            aria-label="Suitability"
            name="Suitability"
            value={formCompliant}
            onChange={handleFormCompliantChange}
          >
            <FormControlLabel
              value="complaint"
              control={<Radio />}
              label="Complaint"
            />
            <FormControlLabel
              value="no-complaint"
              control={<Radio />}
              label="No Complaint"
            />
          </RadioGroup>
  
          <TextField
            className={classes.formInput}
            label="Status"
            variant="outlined"
            name="Status"
            onChange={handleReportedStatusChange}
          />
  
          <TextField
            className={classes.formInput}
            label="Action/Remarks"
            variant="outlined"
            name="remarks"
            onChange={handleRemarksChange}
          />
  
          <div className={classes.formInput}>
            <label className={classes.formLabel} htmlFor="responsibility">
              Responsibility:
            </label>
            <Select
              name="responsibility"
              value={responsibility}
              onChange={handleResponsibilityChange}
              variant="outlined"
            >
              <MenuItem value="">Select Manager</MenuItem>
              {managers.map((manager) => (
                <MenuItem key={manager.id} value={manager.fullName}>
                  {manager.fullName}
                </MenuItem>
              ))}
            </Select>
          </div>
  
          <div className={classes.buttonGroup}>
            <Button
              className={classes.button}
              type="button"
              onClick={handleBack}
              disabled={currentQuestionIndex === 0}
              variant="contained"
              color="primary"
            >
              Back
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={handleNext}
              disabled={currentQuestionIndex === questions.length - 1}
  variant="contained"
  color="primary"
  >
  Skip
  </Button>
  <Button type="submit" variant="contained" color="primary">
  Next
  </Button>
  </div>
  </form>
  <Link to={`/newreport/dca`}>Back to base page</Link>
  </div>
  );
  };

export default DCPIReportsForm;
