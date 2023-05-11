import { useState, useEffect } from "react";
import SiteField from "../common/siteField";
import StatusSelector from "../common/statusSelector";
import DateSelector from "../common/DateSelector";
import UserType from "../common/userTypeField";
import { Link  } from "react-router-dom";
import { useLocation, useParams , Outlet , useOutletContext } from "react-router-dom";



function PIReportsForm() {
  const [selectedSite, setSelectedSite] = useState({ siteName: "" });
  const [formCompliant, setFormCompliant] = useState("");
  const [remarks, setRemarks] = useState("");
  const [userType, setUserType] = useState("");
  const [reportedStatus, setReportedStatus] = useState("");
  const [reportDate, setReportDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [managers, setManagers] = useState([]);
  const [responsibility, setResponsibility] = useState("");

  const location = useLocation();

  const [questions, setQuestions] = useState([]);
  const formName = location.pathname.split("/").pop().replaceAll("%20", " ");
  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("http://localhost:4000/api/pi");
      const data = await response.json();

      const matchingDCA = data.find((pi) => pi.formName === formName);

      if (matchingDCA) {
        setQuestions(matchingDCA.questions);
      }
    };

    fetchQuestions();
  }, [formName]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];
  const { Heading, Question } = currentQuestion || {};


  useEffect(() => {
    // console.log();
    const fetchManagers = async () => {
      console.log("fetching managers");
      const response = await fetch("http://localhost:4000/api/areaManager");
      const data = await response.json();
      setManagers(data);
      // console.log(data);
    };
    fetchManagers();
  }, []);

  const handleSelectSite = (selectedSite) => {
    setSelectedSite(selectedSite);
  };



  const handleUserTypeChange = (event) => {
    setUserType(event);
  };
  const handleFormCompliantChange = (event) => {
    setFormCompliant(event.target.value);
  };

  const handleRemarksChange = (event) => {
    setRemarks(event.target.value);
  };

 

  const handleReportedStatusChange = (event) => {
    setReportedStatus(event.target.value);
  };

  const handleReportDateChange = (event) => {
    setReportDate(event);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event);
  };

  const handleResponsibilityChange = (event) => {
    setResponsibility(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      formName,
      Heading,
      Question,
      formCompliant,
      remarks,
      reportedStatus,
      responsibility,
    });

    //reset
    setFormCompliant("");
    setRemarks("");
    setReportedStatus("");
    setResponsibility("");
    setReportedStatus("");

  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h1>DCA Reports</h1>
      <h1>{formName} CheckList</h1>

      <h1>Header: {Heading}</h1>
      <h1>Question: {Question}</h1>
      <div>
      <div>
  <label>
    <input 
      type="radio" 
      name="Suitability" 
      value="complaint"
      checked={formCompliant === "complaint"}
      onChange={handleFormCompliantChange}
    />
    Complaint
  </label>
  <label>
    <input 
      type="radio" 
      name="Suitability" 
      value="no-complaint"
      checked={formCompliant === "no-complaint"}
      onChange={handleFormCompliantChange}
    />
    No Complaint
  </label>
</div>


      </div>

    <label htmlFor="Status">Status</label>
    <input onChange={handleReportedStatusChange} type="text" name="Status" />

      <label htmlFor="remarks">Action/Remarks: </label>
      <input onChange={handleRemarksChange} type="text" name="remarks" />

      <label htmlFor="responsibility">Responsibility: </label>
      <select
        name="responsibility"
        value={responsibility}
        onChange={handleResponsibilityChange}
      >
        <option value="">Select Manager</option>
        {managers.map((manager) => (
          <option key={manager.id} value={manager.name}>
            {manager.name}
          </option>
        ))}
      </select>

      <button type="submit">Submit</button>
      <button type="button" onClick={handleBack} disabled={currentQuestionIndex === 0}>
          Back
        </button>
        <button type="button" onClick={handleNext} disabled={currentQuestionIndex === questions.length - 1}>
          Skip
        </button>
    </form>
    <Link to="/newreport/planned-inspection">Back to base page</Link>
    </div>
  );
}

export default PIReportsForm;
