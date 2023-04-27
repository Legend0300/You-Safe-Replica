import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, useLocation, Route, Routes } from "react-router-dom";
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";

const Questions = () => {
  return (
    <Routes>
      <Route path="/" element={<QuestionList />} />
      <Route path="/checklist/dcaform/:questionId" element={<DCPIReportsForm />} />
    </Routes>
  );
};
  
const QuestionList = () => {
  const [questions, setQuestions] = useState([]);
  const location = useLocation();
  const formName = location.pathname.split("/").pop().replaceAll("%20", " ");
  
  useEffect(() => {
    fetchQuestions();
  }, [formName]);
  
  const fetchQuestions = async () => {
    const response = await fetch("http://localhost:4000/api/dca");
    const data = await response.json();
    
    const matchingDCA = data.find((dca) => dca.formName === formName);
    
    if (matchingDCA) {
      setQuestions(matchingDCA.questions);
    }
    console.log(questions);
  };
  return (
    <div>
      <h1>Questions for {formName}</h1>
      {questions.map((question) => (
  <div key={question._id}>
    <br />
    <Link to={{ pathname: `/checklist/dcaform/${question._id}`, state: { heading: question.Heading, question: question.Question, formName: formName } }}>{question.Question}</Link>
  </div>
))}
    </div>
  );
};


export default Questions;
