import React, { useState } from 'react';

const NewSafeUnsafeActsFormtest = () => {
  const [actType, setActType] = useState('');
  const [department, setDepartment] = useState('');
  const [area, setArea] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [photo, setPhoto] = useState(null);
  const [responsibility, setResponsibility] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data to backend API
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  return (
    <div>
      <h1>New Safe/Unsafe Acts</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Act Type:</label>
          <input
            type="text"
            value={actType}
            onChange={(e) => setActType(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Area:</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            validationMessage="Report date cannot be in the future"
            required
          />
        </div>
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
          <label>Add Photo:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            required
          />
        </div>
        <div>
          <label>Responsibility:</label>
          <input
            type="text"
            value={responsibility}
            onChange={(e) => setResponsibility(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSafeUnsafeActsFormtest;
