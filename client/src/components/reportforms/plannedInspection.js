import { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { yellow, white } from "@mui/material/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles"

function PlannedInspection(props) {
  console.log(props.type);
  const [formName, setFormName] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [questions, setQuestions] = useState([]);

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { heading: "", question: "" }]);
  };

  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    newQuestions[index][field] = value;
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the form data, e.g. send it to the server
    console.log({ formName, reportedStatus, questions });

    // Reset the form
    setFormName("");
    setReportedStatus("");
    setQuestions([]);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[500],
      },
      background: {
        default: white,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <form onSubmit={handleSubmit}>
          <Typography variant="h1">Planned Inspection</Typography>
          <div>
            <label htmlFor="form-name">Form Name:</label>
            <TextField
              id="form-name"
              type="text"
              value={formName}
              onChange={(event) => setFormName(event.target.value)}
              variant="outlined"
            />
          </div>

          <div>
            {questions.map((question, index) => (
              <div key={index}>
                <label htmlFor={`question-heading-${index}`}>Question Heading:</label>
                <TextField
                  id={`question-heading-${index}`}
                  type="text"
                  value={question.heading}
                  onChange={(event) =>
                    handleQuestionChange(index, "heading", event.target.value)
                  }
                  variant="outlined"
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
                  variant="outlined"
                />
                <br />
              </div>
            ))}
          </div>

          <Button type="button" onClick={handleAddQuestion} variant="outlined">
            Add Question
          </Button>

          <StatusSelector status={reportedStatus} setStatus={handleReportedStatusChange} />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Box>
    </ThemeProvider>
  );
}
export default PlannedInspection;