import resultService from "../../service/result_service";
import { useEffect, useState } from "react";
import React from "react";
import credential from "../../script/credential";
import { useNavigate } from "react-router-dom";
import "./ResultAnalysis.css";

const ResultAnalysis = () => {
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  
  const init = () => {
    if (credential.IsLoggedIn()) {
      resultService
        .getResultsForUser(parseInt(sessionStorage.key(0)))
        .then((response) => {
          setResults(response.data);
        })
        .catch((error) => {
          console.log("Something went wrong in subject", error);
        });
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className="result-analysis-container">
      {results.map((result, index) => (
        <div key={index} className="result-card">
          <h2 className="result-title">{result.questionPaper.title}</h2>
          <h4 className="result-score">Scored: {result.correctAnswers}</h4>
          <h4 className="result-attempted">Attempted: {result.attempted}</h4>
          <h4 className="result-total-marks">Total Marks: {result.totalMarks}</h4>
        </div>
      ))}
    </div>
  );
};

export default ResultAnalysis;
