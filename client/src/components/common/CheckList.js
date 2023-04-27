import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Outlet, Routes, Route } from 'react-router-dom';
import SiteField from "./siteField";
import Questions from "./Questions";
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";

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

const CheckList = (props) => {
  const [checklist, setChecklist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/dca');
      const data = await response.json();
      setChecklist(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Checklist</h1>
      <h2>Nav:</h2>
      <nav>
        <Link to="/">Back to Checklist</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/" element={<ChecklistMap checklist={checklist} />} />
        <Route path="/checklist/:name" element={<Questions />} />
        <Route path="/checklist/dcaform/:questionId" element={<DCPIReportsForm />} />
      </Routes>
    </div>
  );
}

export default CheckList;
