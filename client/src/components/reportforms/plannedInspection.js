import { useState } from "react";
import StatusSelector from "../common/statusSelector";

function PlannedInspection() {
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

  return (
    <form onSubmit={handleSubmit}>
      <h1>Planned Inspection</h1>
      <div>
        <label htmlFor="form-name">Form Name:</label>
        <input
          id="form-name"
          type="text"
          value={formName}
          onChange={(event) => setFormName(event.target.value)}
        />
      </div>



      <div>

        {questions.map((question, index) => (
          <div key={index}>
            <label htmlFor={`question-heading-${index}`}>Question Heading:</label>
            <input
              id={`question-heading-${index}`}
              type="text"
              value={question.heading}
              onChange={(event) =>
                handleQuestionChange(index, "heading", event.target.value)
              }
            />
            <br />
            <label htmlFor={`question-${index}`}>Question:</label>
            <input
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
      </div>
      <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>

      <StatusSelector status={reportedStatus} setStatus={handleReportedStatusChange} />

      <button type="submit">Submit</button>
    </form>
  );
}
export default PlannedInspection;