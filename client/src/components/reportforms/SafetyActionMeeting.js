import React, { useState } from "react";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import DateSelector from "../common/DateSelector";
import { TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { yellow, white } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";


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
    </ThemeProvider>
  );
};

export default NewSafeUnsafeActsFormtest;
