import React from 'react';
import { useState } from 'react';
import './App.css';
import Login from './components/login/login';
import ForgotPass from './components/login/forgotpass';
import EditPass from './components/login/editpass';
import HazardReportForm from './components/user/hazardReportForm';


function App() {  

  return (

    <div className="app">
      {/* <Login /> */}
      <HazardReportForm />
    </div>
  );
}
export default App;
