import React from 'react';

const ReportingTypePage = () => {
  const reportingTypes = [
    'Safe/Unsafe Acts',
    'Hazard Reporting',
    'Incident Reporting',
    'Deep Compliance Reporting',
    'Planned Inspection',
    'Safety Action Meeting (SAM)'
  ];

  return (
    <div>
      <h1>Select Reporting Type</h1>
      <ul>
        {reportingTypes.map(type => (
          <li key={type}>
            <button>{type}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingTypePage;
