import React, { useState, useEffect } from 'react';

const ReportDetails = (props) => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    setReport(props.report);
  }, [props.report]);

  console.log('report', report);

  if (!report) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Report Details</h1>
      <p>Department: {report.department ? report.department : 'NA'}</p>
      <p>Area: {report.area || 'NA'}</p>
      <p>Description: {report.description || 'NA'}</p>
      <p>Date: {report.endDate || 'NA'}</p>
      <div>
        <h3>Photos</h3>
        <ul>
          {/* {report.photos.map(photo => (
            <li key={photo.id}>
              <img src={photo.url} alt="Report Photo" />
            </li>
          ))} */}
          <li>
            <img
              src="https://cdn.pixabay.com/photo/2014/06/03/19/38/road-sign-361514_960_720.png"
              alt="Report Photo"
              width="40%"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ReportDetails;