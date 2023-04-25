import React, { useState } from "react";

function DateSelector({ date, setDate }) {
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <div>
      <label htmlFor="date">Date</label>
      <input type="date" id="date" value={date} onChange={handleDateChange} />
    </div>
  );
}

export default DateSelector;
