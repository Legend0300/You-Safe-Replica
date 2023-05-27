import React, { useState, useEffect } from "react";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import DateSelector from "../common/DateSelector";
import { TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { yellow } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const NewSafeUnsafeActsFormtest = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({
    department: "",
  });
  const [selectedArea, setSelectedArea] = useState({ area: "" });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [leader, setLeader] = useState("");
  const [participants, setParticipants] = useState([]);
  const [topic, setTopic] = useState("");
  const [outline, setOutline] = useState("");
  const [questions, setQuestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [actions, setActions] = useState("");
  const [raisedBy, setRaisedBy] = useState("");
  const [managers, setManagers] = useState([]);
  const [responsible, setResponsible] = useState("");
  const [popUpDate, setPopUpDate] = useState("");
  const [status, setStatus] = useState("");
  const [popUpQuestions, setPopUpQuestions] = useState([]);
  const [popUpQuestion, setPopUpQuestion] = useState("");


  useEffect(() => {
    const fetchManagers = async () => {
      console.log('fetching managers');
      const response = await fetch('http://localhost:4000/api/areaManager');
      const data = await response.json();
      setManagers(data);
    };
    fetchManagers();
  }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[500],
      },
      background: {
        default: "white",
      },
    },
  });

  const handleSelectDepartment = (selectedDepartment) => {
    setSelectedDepartment(selectedDepartment);
  };

  const handleSelectArea = (selectedArea) => {
    setSelectedArea(selectedArea);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const handlePopUpDateChange = (PopUpDate) => {
    setPopUpDate(PopUpDate);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { heading: "", question: "" }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(questions.length - 1, 1);
    setQuestions(newQuestions);
  };

  const handleAddParticipant = () => {
    setParticipants([...participants, ""]);
  };

  const handleParticipantChange = (index, value) => {
    const newParticipants = [...participants];
    newParticipants[index] = value;
    setParticipants(newParticipants);
  };

  const handleRemoveParticipant = () => {
    const newParticipants = [...participants];
    newParticipants.splice(participants.length - 1, 1);
    setParticipants(newParticipants);
  };

  const handlePopUpQuestionChange = (popUpQuestion) => {
    setPopUpQuestion(popUpQuestion);
  };

  const handleAddPopUpQuestions = () => {
    setPopUpQuestions([...popUpQuestions,popUpQuestion]);
  };

  const handlePopUpQuestionsChange = (index, value) => {
    const newPopUpQuestions = [...popUpQuestions];
    newPopUpQuestions[index] = value;
    setPopUpQuestions(newPopUpQuestions);
  };

  const handleRemovePopUpQuestions = () => {
    const newPopUpQuestions = [...popUpQuestions];
    newPopUpQuestions.splice(popUpQuestions.length - 1, 1);
    setPopUpQuestions(newPopUpQuestions);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleResponsibleChange = (event) => {
    setResponsible(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleRaisedByChange = (event) => {
    setRaisedBy(event.target.value);
  };

  const handleActionsChange = (event) => {
    setActions(event.target.value);
  };



  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to backend API
    console.log({
      selectedDepartment,
      selectedArea,
      date,
      time,
      leader,
      participants,
      topic,
      outline,
      questions,
    });
  };

  const handlePopUpSubmit = (event) => {
    event.preventDefault();
    // setOpen(fal\se);
    // Add code to submit form data to backend API
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <Typography variant="h1">SafetyActionForm</Typography>
          <form onSubmit={handleSubmit}>
            <div style={{width: '100%'}}>
            <DepartmentField onSelectDepartment={handleSelectDepartment} />
            </div>
            <div style={{width: '100%'}}>
            <AreaField onSelectArea={handleSelectArea} />
            </div>
            <div style={{width: '100%', display:'flex'}}>
              <div style={{width: '54.649%'}}>
            <DateSelector selectedDate={date} onDateChange={handleDateChange} fullWidth/>
            </div>
            <Box sx={{width: '40%'}}>
              <TextField
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                
                required
                />
            </Box>
                </div>
            <Box>
              <TextField
                type="text"
                id="leader"
                value={leader}
                label="Leader"
                style={{width: '89.41%'}}
                onChange={(e) => setLeader(e.target.value)}
                required
              />
            </Box>
            <Box>
              <Typography variant="h2">Participants</Typography>
              {participants.map((participant, index) => (
                <div key={index}>
                  <label htmlFor={`participant-${index}`}>Participant:</label>
                  <TextField
                    id={`participant-${index}`}
                    type="text"
                    value={participant}
                    onChange={(event) =>
                      handleParticipantChange(index, event.target.value)
                    }
                  />
                </div>
              ))}
            </Box>
            <Box>
              <Button variant="contained" sx={{ bgcolor: yellow[500], color: "black" }} type="button" onClick={() => handleAddParticipant()}>
                Add Participant
              </Button>

              <Button variant="contained" sx={{ bgcolor: yellow[500], color: "black" }} type="button" onClick={() => handleRemoveParticipant()}>
                Remove Participant
              </Button>
            </Box>
            <Box>
              <label htmlFor="topic">Topic:</label>
              <TextField
                type="text"
                id="topic"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                required
              />
            </Box>
            <Box>
              <label htmlFor="outline">Outline of Facts:</label>
              <TextField
                id="outline"
                multiline
                rows={4}
                value={outline}
                onChange={(e) => setOutline(e.target.value)}
                required
              />
            </Box>
            <Box>
              <Typography variant="h2">Questions</Typography>
              {questions.map((question, index) => (
                <div key={index}>
                  <label htmlFor={`question-heading-${index}`}>
                    Question Heading:
                  </label>
                  <TextField
                    id={`question-heading-${index}`}
                    type="text"
                    value={question.heading}
                    onChange={(event) =>
                      handleQuestionChange(index, "heading", event.target.value)
                    }
                  />
                  <br />
                  <label htmlFor={`question-${index}`}>Question:</label>
                  <TextField
                    id={`question-${index}`}
                    type="text"
                    value={question.question}
                    onChange={(event) =>
                      handleQuestionChange(index, "question", event.target.value)
                    }
                  />
                  <br />
                </div>
              ))}
            </Box>
            <Box>
              <Button variant="contained" sx={{ bgcolor: yellow[500], color: "black" }} type="button" onClick={handleAddQuestion}>
                Add Question
              </Button>
              <Button variant="contained" sx={{ bgcolor: yellow[500], color: "black" }} type="button" onClick={handleRemoveQuestion}>
                Remove Question
              </Button>
            </Box>
            <Button type="submit" variant="contained" sx={{ bgcolor: yellow[500], color: "black" }}>Submit</Button>
            </form>
          </Box>
        {
          // adding a pop up button for a form 
        }
        <div>
          <div>
        <Button variant="contained" sx={{background: 'white'}} onClick={handleClickOpen}> 
          Actions and Recommendations
        </Button>
        <Box sx={{borderColor:'black' , width: '100%' }}>
          {popUpQuestions.map((popUpQuestion, index) => (
            <div key={index} style={{borderColor:'black' , width: '100%'}}>  
              {index}   {popUpQuestion.actions}  {popUpQuestion.raisedBy}   {popUpQuestion.responsible}   {popUpQuestion.status}
            </div>
          ))}
        </Box>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Actions and Recommendations</DialogTitle>
        <DialogContent>
          
          <form onSubmit={handlePopUpSubmit} style={{width: '100%'}}>
          <Box sx={{width: '100%'}}>
            <TextField
              id="actions"
              multiline
              rows={4}
              fullWidth
              value={actions}
              onChange={handleActionsChange}
              required
            />
          </Box>
          <div>
          <Box>
            <div style={{width: '100%', marginTop: '6.25%' , marginBottom: '6.25%'}}>
            <label htmlFor="raisedBy" style={{fontSize: 18 , fontWeight: 10,}}>Raised by:</label>
            </div>
            <TextField
              type="text"
              id="raisedBy"
              value={raisedBy}
              onChange={handleRaisedByChange}
              fullWidth
              required
            />
          </Box>
          <Box>
          <div style={{width: '100%', marginTop: '6.25%' , marginBottom: '6.25%'}}>
            <label htmlFor="managers" style={{fontSize: 18 , fontWeight: 10}}>Managers:</label>
            </div>
            <Select
              value={responsible}
              label="Responsible"
              onChange={handleResponsibleChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="Manager">Manager</MenuItem>
              {managers.length > 0 ? (
                
              managers.map((manager) => (
                <MenuItem key={manager.id} value={manager.fullName}>
                  {manager.fullName}
                </MenuItem>
              ))
              ) : (
                <MenuItem value="">No managers found</MenuItem>
              )
            }
            </Select>
          </Box>
          <Box>
          <div style={{width: '100%', marginTop: '6.25%' , marginBottom: '6.25%'}}>
            <label htmlFor="date" style={{fontSize: 18 , fontWeight: 10}}>Target Date:</label>
            </div>
            <DateSelector selectedDate={popUpDate} onDateChange={handlePopUpDateChange} fullWidth />
          </Box>
          <Box>
          <div style={{width: '100%', marginTop: '6.25%' , marginBottom: '6.25%'}}>
            <label htmlFor="status" style={{fontSize: 18 , fontWeight: 10}}>Status:</label>
            </div>
            <Select
              value={status}
              label="Status"
              onChange={handleStatusChange}
              variant="outlined"
              fullWidth
            >
              <MenuItem value="inProgress">IN PROGRESS</MenuItem>
              <MenuItem value="pending">PENDING</MenuItem>
              <MenuItem value="completed">COMPLETED</MenuItem>
            </Select>
          </Box>
          </div>    
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          
          <Button type="submit" onClick={()=>{
            handleClose();
            handleAddPopUpQuestions();
            handlePopUpQuestionChange({actions,raisedBy,managers,responsible,popUpDate,status});
          }
             } variant="contained" sx={{ bgcolor: yellow[500], color: "black" }}>
            Submit
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>

    </ThemeProvider>
  );
};

export default NewSafeUnsafeActsFormtest;