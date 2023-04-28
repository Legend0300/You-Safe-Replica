import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Outlet, Routes } from 'react-router-dom';
import NewSafeUnsafeActsForm from '../reportforms/SafeUnsafeform';
import HazardReportingForm from '../reportforms/hazardReportForm';
import IncidentReporting from '../reportforms/incidentReportForm';
import DCPIReportsForm from '../reportforms/dCPIReportsReportsFields';
import PlannedInspection from '../reportforms/plannedInspection';
import NewSafeUnsafeActsFormtest from '../reportforms/SafetyActionMeeting';
import HomePage from '../home/homepage';
import CheckList from '../common/CheckList';

const ReportingTypePage = () => {
  return (
    <div>
      <div>
        <h1>Nav:</h1>
        <nav>
          <Link to="/">Selection Menu</Link>
          <br />
          <Link to="/homepage">Home</Link>
        </nav>
        <br />
        <Outlet />
      </div>
      <Routes>
          <Route path="/*" element={<SelectPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/safe-unsafe-acts" element={<NewSafeUnsafeActsForm />} />
          <Route path="/hazard-reporting" element={<HazardReportingForm />} />
          <Route path="/incident-reporting" element={<IncidentReporting />} />
          <Route path="/checklist" element={<CheckList />} />
          <Route path="/planned-inspection" element={<PlannedInspection />} />
          <Route path="/safety-action-meeting" element={<NewSafeUnsafeActsFormtest />} />
      </Routes>
      </div>
  );
};

const SelectPage = () => {
  const reportingTypes = [
    { name: 'Safe/Unsafe Acts', path: '/safe-unsafe-acts' },
    { name: 'Hazard Reporting', path: '/hazard-reporting' },
    { name: 'Incident Reporting', path: '/incident-reporting' },
    { name: 'Deep Compliance Reporting', path: '/checklist' },
    { name: 'Planned Inspection', path: '/planned-inspection' },
    { name: 'Safety Action Meeting (SAM)', path: '/safety-action-meeting' }
  ];
  return(
    <div>
      <h1>Select Reporting Type</h1>
      <ul>
        {reportingTypes.map(type => (
          <li key={type.name}>
            <Link to={type.path}>{type.name}</Link>
          </li>
        ))}
      </ul>
      <Link to="/">Back to Home</Link>
    </div>
  )
}
export default ReportingTypePage;



