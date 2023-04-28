import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import { useOutletContext } from "react-router-dom"
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";


const Questions = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuestionList />} />
      </Routes>
      <Outlet />
    </div>
  );
};

const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const location = useLocation(); 
  const formName = location.pathname.split("/").pop().replaceAll("%20", " ");
  const [selectedQuestion, setSelectedQuestion] = useState({});

  const handleQuestionClick = (question) => {
    setSelectedQuestion(question);
    console.log(selectedQuestion);
  };

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

  useEffect(() => {
    console.log(questions);
  }, [questions]);

  return (
    <div>
      <h1>Questions</h1>
      {questions.map((question) => (
        <div key={question.id}>
          <h2>{question.Question}</h2>
          {console.log(question)}
          <Link
            to={{ pathname: `form`, state: { question: question } }}
            onClick={() => handleQuestionClick(question)}
          >
            {question.Question}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Questions;
