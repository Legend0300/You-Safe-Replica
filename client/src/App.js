import React from 'react';
import { useState } from 'react';
import './App.css';
import Test from './components/login/test';
import ForgotPass from './components/login/forgotpass';
import EditPass from './components/login/editpass';
import HazardReportForm from './components/user/hazardReportForm';
import HazardReportingForm from './components/reportforms/HazardReporting';

function App() {
  return (
    <div className="app">
       <Test />
    </div>
  );
}
export default App;
