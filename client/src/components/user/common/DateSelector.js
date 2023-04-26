    import React, { useState } from "react";

    function DateSelector({ selectedDate, onDateChange }) {
        const handleDateChange = (e) => {
          onDateChange(e.target.value);
        };
      
        return (
          <div>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" value={selectedDate} onChange={handleDateChange} />
          </div>
        );
      }
      

    export default DateSelector;
