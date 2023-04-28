import React , {useState , useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Outlet, Routes } from 'react-router-dom';
import NewSafeUnsafeActsForm from '../reportforms/SafeUnsafeform';
import HazardReportingForm from '../reportforms/hazardReportForm';
import IncidentReporting from '../reportforms/incidentReportForm';
import DCPIReportsForm from '../reportforms/dCPIReportsReportsFields';
import PlannedInspection from '../reportforms/plannedInspection';
import NewSafeUnsafeActsFormtest from '../reportforms/SafetyActionMeeting';
import HomePage from '../home/homepage';
import CheckList from '../common/CheckList';
import Questions from "../common/Questions";
import PIQuestions from "../common/PIQuestions";
import PIReportForm from "../reportforms/piReportForm";


const ChecklistMap = ({ checklist }) => {
  return (
    <div>
      <label htmlFor="form-name">Form Name:</label>
      {checklist.map((checklist) => (
        <div key={checklist.id}>
          <Link to={`/checklist/${checklist.formName}`}>{checklist.formName}</Link>
        </div>
      ))}
    </div>
  );
}

const ReportingTypePage = () => {
  const reportingTypes = [
    { name: 'Safe/Unsafe Acts', path: '/safe-unsafe-acts' },
    { name: 'Hazard Reporting', path: '/hazard-reporting' },
    { name: 'Incident Reporting', path: '/incident-reporting' },
    { name: 'Deep Compliance Reporting', path: '/checklist' },
    { name: 'Planned Inspection', path: '/planned-inspection' },
    { name: 'Safety Action Meeting (SAM)', path: '/safety-action-meeting' }
  ];



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
        <Route path="/" element={<SelectPage reportingTypes={reportingTypes} />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/safe-unsafe-acts" element={<NewSafeUnsafeActsForm />} />
        <Route path="/hazard-reporting" element={<HazardReportingForm />} />
        <Route path="/incident-reporting" element={<IncidentReporting />} />
        <Route path="/checklist" element={<CheckList type={["dca"]}/>} />
        <Route path="/planned-inspection" element={<CheckList type={["pi"]}/>} />
        <Route path="/safety-action-meeting" element={<NewSafeUnsafeActsFormtest />} />

        <Route path="/planned-inspection/:name" element={<PIQuestions />}>
          <Route path="form" element={<PIReportForm />} />
        </Route>
        <Route path="/checklist/:name" element={<Questions />}>
          <Route path="form" element={<DCPIReportsForm />} />
        </Route>
        <Route path="/*" element={<>404 not found!</>}/> 
      </Routes>
    </div>
  );
};

const SelectPage = ({ reportingTypes }) => {
  return (
    <div>
      <h1>Select Reporting Type</h1>
      <ul>
        {reportingTypes.map(type => (
          <li key={type.name} >
            <Link to={type.path}>{type.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportingTypePage;
