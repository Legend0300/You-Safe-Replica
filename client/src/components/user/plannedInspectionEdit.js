import { useState } from "react";

function PlannedInspectionEditForm(props) {
  const [formName, setFormName] = useState(props.formName);
  const [status, setStatus] = useState(props.status);
  const [questions, setQuestions] = useState(props.questions);

  const handleFormNameChange = (event) => {
    setFormName(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleQuestionChange = (index, event) => {
    const newQuestions = [...questions];
    newQuestions[index][event.target.name] = event.target.value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { heading: "", question: "" }]);
  };

  const handleRemoveQuestion = (index) => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);
    setQuestions(newQuestions);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call a function from the parent component to update the state with the new values
    props.onSubmit(formName, status, questions);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="formName">Form Name:</label>
          <input
            type="text"
            id="formName"
            name="formName"
            value={formName}
            onChange={handleFormNameChange}
          />
        </div>
        <div>
          <label htmlFor="status">Status:</label>
          <input
            type="text"
            id="status"
            name="status"
            value={status}
            onChange={handleStatusChange}
          />
        </div>
        <div>
          <label htmlFor="questions">Questions:</label>
          {questions.map((question, index) => (
            <div key={index}>
              <input
                type="text"
                name="heading"
                placeholder="Question Heading"
                value={question.heading}
                onChange={(event) => handleQuestionChange(index, event)}
              />
              <input
                type="text"
                name="question"
                placeholder="Question"
                value={question.question}
                onChange={(event) => handleQuestionChange(index, event)}
              />
              <button type="button" onClick={() => handleRemoveQuestion(index)}>
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddQuestion}>
            Add Question
          </button>
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default PlannedInspectionEditForm;
