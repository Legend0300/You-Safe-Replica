import React, { useEffect, useState } from "react";
import axios from "axios";
import SiteField from "../common/siteField";
import DepartmentField from "../common/DepartmentField";
import AreaField from "../common/AreaField";
import StatusSelector from "../common/statusSelector";




import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

const EmployeeForm = () => {
  const [areaManagerName, setAreaManagerName] = useState("");
  const [selectedSite, setSelectedSite] = useState({ siteName: "" });
  const [selectedDepartment, setSelectedDepartment] = useState({department: "",});
  const [selectedArea, setSelectedArea] = useState({ area: "" });
  const [status, setStatus] = useState("");

  const handleSelectDepartment = (selectedDepartment) => {
    setSelectedDepartment(selectedDepartment);
    console.log(selectedDepartment);
    // do something with the selected department data
  };

  const handleSelectSite = (selectedSite) => {
    setSelectedSite(selectedSite);
    // Fetch departments data for the selected site from backend API
  };

  const handleSelectArea = (selectedArea) => {
    setSelectedArea(selectedArea);
  };

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };


  const handleAreaManagerNameChange = (event) => {
    setAreaManagerName(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({
      site: selectedSite,
      department: selectedDepartment,
      area: selectedArea,
      areaManagerName: areaManagerName,
      status,
    });

    // Call your backend API or perform other actions here
  };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            id="areaManagerName"
            label="Employee Name"
            value={areaManagerName}
            onChange={(e) => setAreaManagerName(e.target.value)}
          />
        </div>
        <AreaField onSelectArea={handleSelectArea} />
        <SiteField onSelectSite={handleSelectSite} />
        <DepartmentField onSelectDepartment={handleSelectDepartment} />

        <StatusSelector status={status} setStatus={handleStatusChange} />



        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    );
  };

export default EmployeeForm;
