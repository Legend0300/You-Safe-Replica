import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet , useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import HazardReportForm from './components/reportforms/hazardReportForm';
import ReportingTypePage from './components/reports/reportingType';
import SafeUnsafeReportForm from './components/user/safeUnsafeReportFields';
import SafetyActionMeeting from './components/reportforms/SafetyActionMeeting';
import DCPIReportsForm from './components/reportforms/dCPIReportsReportsFields';
import PIReportForm from './components/reportforms/piReportForm';
import CheckList from './components/common/CheckList';
import HomePage from './components/home/homepage';
import IncidentReportForm from './components/reportforms/incidentReportForm';
import Login from './components/login/login';
import NewSafeUnsafeActsForm from './components/reportforms/SafeUnsafeform';
import ReportingPage from './components/reports/reportingpage';
import ForgotPassword from './components/login/forgotpass';

function App() {
  return (
    <div className="app">
      <Router>
          <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='reports' element={<ReportingPage/>}/>
          <Route path='/newreport' element={<ReportingTypePage />} />
          <Route path='/newreport/hazardreport' element={<HazardReportForm />} />
          <Route path='/newreport/safeusafereport' element={<NewSafeUnsafeActsForm />} />
          <Route path='/newreport/safetyactionmeeting' element={<SafetyActionMeeting />} />
          <Route path='/newreport/incidentreport' element={<IncidentReportForm />}/>
          <Route path='/newreport/dca' element={<CheckList type={["dca"]} />} />
          <Route path='/newreport/dca/:id' element={<DCPIReportsForm />} />
          <Route path='/newreport/planned-inspection' element={<CheckList type={["pi"]} />} />
          <Route path='/newreport/planned-inspection/:id' element={<PIReportForm />} />
          <Route path='/*' element={<div>404 not found!</div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
