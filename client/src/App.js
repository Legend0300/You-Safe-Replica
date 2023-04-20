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

function App() {
  return (
    <div className="app">
      <VisitorForm />
      <EmployeeForm />
      <AreaManager />
      < DepartmentForm />
        < Site />
        < EditSite />
      <AreaForm />
       <Test />
       <Register />
       < ReportingTypePage />
       < HomePage />
        < ReportDetails />
    </div>
  );
}
export default App;
