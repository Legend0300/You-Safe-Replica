import React, { useState } from 'react';
import DepartmentField from '../common/DepartmentField';
import AreaField from '../common/AreaField';
import DateSelector from '../common/DateSelector';

const NewSafeUnsafeActsFormtest = () => {
  const [selectedDepartment, setSelectedDepartment] = useState({ department: '' });
  const [selectedArea, setSelectedArea] = useState({ area: '' });
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [leader, setLeader] = useState("");
  const [participants, setParticipants] = useState([]);
  const [topic, setTopic] = useState("");
  const [outline, setOutline] = useState("");
  const [questions, setQuestions] = useState([]);


  
  const handleSelectDepartment = (selectedDepartment)=>{
    setSelectedDepartment(selectedDepartment);
  };

  const handleSelectArea = (selectedArea)=>{
    setSelectedArea(selectedArea);
  };

  const handleDateChange=(date)=>{
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
    newQuestions.splice( questions.length-1,1);
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
    newParticipants.splice(participants.length-1, 1);
    setParticipants(newParticipants);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to backend API
    console.log({ selectedDepartment, selectedArea, date, time, leader, participants, topic, outline, questions });
  };

  return (
    <div>
      <h1>SafetyActionForm</h1>
      <form onSubmit={handleSubmit}>
       
       <DepartmentField onSelectDepartment={handleSelectDepartment} />
        
       <AreaField onSelectArea={handleSelectArea} />
          
       <DateSelector selectedDate={date} onDateChange={handleDateChange} />
       
        <div>
          <label>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>

      <div>
      <label htmlFor="leader">Leader:</label>
      <input
        type="text"
        id="leader"
        value={leader}
        onChange={(e) => setLeader(e.target.value)}
        required
      />
      </div>

      <div>
        <h2>Participants</h2>
        {participants.map((participant, index) => (
          <div key={index}>
            <label htmlFor={`participant-${index}`}>Participant:</label>
            <input
              id={`participant-${index}`}
              type="text"
              value={participant}
              onChange={(event) =>
                handleParticipantChange(index, event.target.value)
              }
            />
              
          </div>
        ))}
      </div>

      <div>
        <button
          type="button"
          onClick={() => handleAddParticipant()}>
          Add Participant
        </button>

        <button
          type="button"
          onClick={() => handleRemoveParticipant()}>
          Remove Participant
        </button>
        </div>

      <div>
      <label htmlFor="topic">Topic:</label>
      <input
        type="text"
        id="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        required
      />
      </div>
      
      <div>
      <label htmlFor="outline">Outline of Facts:</label>
      <textarea
        id="outline"
        value={outline}
        onChange={(e) => setOutline(e.target.value)}
        required
      />
      </div>

      <div>
        <h2>Questions</h2>
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

      <div>
        <button type="button" onClick={handleAddQuestion}>
            Add Question
        </button>
        <button type="button" onClick={handleRemoveQuestion}>
            Remove Question
        </button>
      </div>
      
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSafeUnsafeActsFormtest;
