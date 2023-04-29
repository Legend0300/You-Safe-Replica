import React, { useEffect, useState , useNavigate } from "react";
import {
  BrowserRouter as Router,
  Link,
  useLocation,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";

const PIQuestions = (props) => {
  const type = props.type;
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  return (
    <div>
      <Routes>
        <Route path="/" element={<QuestionList type={type} setSelectedQuestion={setSelectedQuestion} />} />
      </Routes>
      {selectedQuestion && <Outlet context={[selectedQuestion, selectedQuestion.formName]} />}


    </div>
  );
};

const QuestionList = ({ setSelectedQuestion , type }) => {

  const [questions, setQuestions] = useState([]);
  const location = useLocation(); 
  const formName = location.pathname.split("/").pop().replaceAll("%20", " ");
  console.log(type);
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/api/pi");
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
      <h1>Questions</h1>
      {questions.map((question) => (
        <div key={question.Question}>
          <h2>{question.Question}</h2>
          <Link
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

export default PIQuestions;
