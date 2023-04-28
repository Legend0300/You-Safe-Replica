import React from 'react';
import './App.css';
// import Test from './components/login/test';
// import ForgotPass from './components/login/forgotpass';
// import EditPass from './components/login/editpass';
import HazardReportForm from './components/reportforms/hazardReportForm';
// import HazardReportingForm from './components/reportforms/HazardReporting';
// import Register from './components/login/Register';
import ReportingTypePage from './components/reports/reportingType';
// import HomePage from './components/home/homepage';
// import ReportDetails from './components/reports/reportDetails';
// import AreaForm from './components/user/area';
// import Site from './components/user/site';
// import EditSite from './components/user/editSite';
// import DepartmentForm from './components/user/department';
// import AreaManager from './components/user/areaManager';
// import VisitorForm from './components/user/visitor';
// import EmployeeForm from './components/user/employee';
import IncidentReportForm from './components/reportforms/incidentReportForm';
// import PlannedInspection from './components/user/plannedInspection';
// import DeepComplianceAuditForm from './components/user/deepComplianceAuditForm';
// import AreaFields from './components/admin/areaFields';
// import SafeUnsafeReportForm from './components/user/safeUnsafeReportFields';
// import TaskReportsForm from './components/user/taskReportsFields';
// import DepartmentField from './components/user/DepartmentField';
import DCPIReportsForm from './components/reportforms/dCPIReportsReportsFields';
import PlannedInspection from './components/reportforms/plannedInspection';
import CheckList from './components/common/CheckList';
import Questions from './components/common/Questions';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <ReportingTypePage />
      </BrowserRouter>
    </div>
  );
}
export default App;
