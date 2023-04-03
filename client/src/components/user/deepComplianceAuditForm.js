import { useState } from "react";

function DeepComplianceAuditForm() {
  const [formName, setFormName] = useState("");
  const [status, setStatus] = useState("");
  const [questions, setQuestions] = useState([]);

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
    console.log({ formName, status, questions });
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="status">Status:</label>
        <input
          id="status"
          type="text"
          value={status}
          onChange={(event) => setStatus(event.target.value)}
        />
      </div>
      <div>
        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
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
      <button type="submit">Submit</button>
    </form>
  );
}
export default DeepComplianceAuditForm;