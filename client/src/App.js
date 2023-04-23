import React from 'react';
import { useState } from 'react';
import './App.css';
import Test from './components/login/test';
import ForgotPass from './components/login/forgotpass';
import EditPass from './components/login/editpass';
import HazardReportForm from './components/user/hazardReportForm';
import HazardReportingForm from './components/reportforms/HazardReporting';
import Register from './components/login/Register';
import ReportingTypePage from './components/reports/reportingType';
import HomePage from './components/home/homepage';
import ReportDetails from './components/reports/reportDetails';
import AreaForm from './components/user/area';
import Site from './components/user/site';
import EditSite from './components/user/editSite';
import DepartmentForm from './components/user/department';
import AreaManager from './components/user/areaManager';
import VisitorForm from './components/user/visitor';
import EmployeeForm from './components/user/employee';
import IncidentReportForm from './components/user/incidentReportForm';
import PlannedInspection from './components/user/plannedInspection';
import DeepComplianceAuditForm from './components/user/deepComplianceAuditForm';
import AreaFields from './components/admin/areaFields';


function App() {
  return (
    <div className="app">
      <AreaFields/>
    </div>
  );
}
export default App;
