import React, { useEffect, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Container, Typography, Link, ThemeProvider, Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";

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

const Questions = (props) => {
  const type = props.type;
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Routes>
          <Route
            path="/"
            element={<QuestionList type={type} setSelectedQuestion={setSelectedQuestion} />}
          />
        </Routes>
        {selectedQuestion && <Outlet context={[selectedQuestion, selectedQuestion.formName]} />}
      </Container>
    </ThemeProvider>
  );
};

const QuestionList = ({ setSelectedQuestion, type }) => {
  const location = useLocation();
  console.log(type);
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

  return (
    <div>
      <Typography variant="h1">Questions</Typography>
      {questions.map((question) => (
        <div key={question.Question} style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
          <Typography variant="h2">{question.Question}</Typography>
          <Link
            component={RouterLink}
            to={{ pathname: `form`, state: { question: question } }}
            onClick={() => setSelectedQuestion({ ...question, formName })}
          >
            {question.Question}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Questions;
