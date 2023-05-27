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
          <DepartmentField onSelectDepartment={handleSelectDepartment} />
          <AreaField onSelectArea={handleSelectArea} />
          <DateSelector selectedDate={date} onDateChange={handleDateChange} />
          <Box>
            <Typography>Time:</Typography>
            <TextField
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
            />
          </Box>
          <Box>
            <label htmlFor="leader">Leader:</label>
            <TextField
              type="text"
              id="leader"
              value={leader}
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
          
          <form onSubmit={handlePopUpSubmit}>
          <Box>
            <label htmlFor="actions">Actions:</label>
            <TextField
              id="actions"
              multiline
              rows={4}
              value={actions}
              onChange={handleActionsChange}
              required
            />
          </Box>
          <Box>
            <label htmlFor="raisedBy">Raised by:</label>
            <TextField
              type="text"
              id="raisedBy"
              value={raisedBy}
              onChange={handleRaisedByChange}
              required
            />
          </Box>
          <Box>
            <label htmlFor="managers">Managers:</label>
            <Select
              value={responsible}
              label="Responsible"
              onChange={handleResponsibleChange}
              variant="outlined"
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
            <label htmlFor="date">Target Date:</label>
            <DateSelector selectedDate={popUpDate} onDateChange={handlePopUpDateChange} />
          </Box>
          <Box>
            <label htmlFor="status">Status:</label>
            <Select
              value={status}
              label="Status"
              onChange={handleStatusChange}
              variant="outlined"
            >
              <MenuItem value="inProgress">IN PROGRESS</MenuItem>
              <MenuItem value="pending">PENDING</MenuItem>
              <MenuItem value="completed">COMPLETED</MenuItem>
            </Select>
          </Box>
          //add a submit button
          
              
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
