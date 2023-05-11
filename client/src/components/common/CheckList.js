import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Link, Outlet, Routes, Route } from 'react-router-dom';
import SiteField from "./siteField";
import Questions from "./Questions";
import DCPIReportsForm from "../reportforms/dCPIReportsReportsFields";

const ChecklistMap = ({ checklist , type }) => {
  console.log(type);
  return (
    <div>
      <label htmlFor="form-name">Form Name:</label>
      {checklist.map((checklist) => (
        <div key={checklist.id}>
{type === "dca" ? <Link to={`${checklist.formName}`}>{checklist.formName}</Link> : type === "pi" ? <Link to={`${checklist.formName}`}>{checklist.formName}</Link> : null}
        </div>
      ))}
    </div>
  );
}

const CheckList = (props) => {
  const [checklist, setChecklist] = useState([]);
  console.log(props.type[0]); 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4000/api/${props.type[0]}`);
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
        <Route path="/" element={<ChecklistMap type={props.type[0]} checklist={checklist} />}>
          <Route path=":name" element={<DCPIReportsForm />} />
        </Route>
        <Route path="/*"  element={<>404 not found!</>}/> 
      </Routes>
    </div>
  );
}

export default CheckList;
