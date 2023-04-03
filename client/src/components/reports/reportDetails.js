import React from 'react';

const ReportDetails = ({ report }) => {
  return (
    <div>
      <h1>Report Details</h1>
      <p>Department: {report.department}</p>
      <p>Area: {report.area}</p>
      <p>Description: {report.description}</p>
      <p>Date: {report.date}</p>
      <div>
        <h3>Photos</h3>
        <ul>
          {report.photos.map(photo => (
            <li key={photo.id}>
              <img src={photo.src} alt="Report Photo" />
            </li>
          ))}
        </ul>
      </div>
      <p>Responsibility: {report.responsibility}</p>
    </div>
  );
};

export default ReportDetails;
