import React, { useState } from 'react';

const IncidentReporting = () => {
  const [formState, setFormState] = useState({
    department: '',
    area: '',
    incidentType: '',
    description: '',
    date: '',
    time: '',
    action: '',
    photo: null,
    eventType: '',
    eventSubTypes: '',
    reason: ''
  });

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === 'file' ? target.files[0] : target.value;
    const name = target.name;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();

    // Do something with formState, like submit to a server
    console.log(formState);
  };

  return (
    <div>
      <h1>Incident Reporting</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Department:
            <input
              type="text"
              name="department"
              value={formState.department}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Area:
            <input
              type="text"
              name="area"
              value={formState.area}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Incident Type:
            <input
              type="text"
              name="incidentType"
              value={formState.incidentType}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              name="description"
              value={formState.description}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={formState.date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Time:
            <input
              type="time"
              name="time"
              value={formState.time}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Action:
            <input
              type="text"
              name="action"
              value={formState.action}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Add Photo:
            <input
              type="file"
              name="photo"
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Event Type:
            <input
              type="text"
              name="eventType"
              value={formState.eventType}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Event Sub Types:
            <input
              type="text"
              name="eventSubTypes"
              value={formState.eventSubTypes}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Reason:
            <textarea
              name="reason"
              value={formState.reason}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    );
};

export default IncidentReporting;
