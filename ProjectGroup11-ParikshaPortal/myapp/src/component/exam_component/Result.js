import { useNavigate } from "react-router-dom";
import credential from "../../script/credential";
import { useLocation } from "react-router-dom";
import "./Result.css";

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickPrint = () => {
    window.print();
    credential.Logout();
    navigate("/");
  };
  const handleClick = () => {
    credential.Logout();
    navigate("/");
  };
  return (
    <div className="result-container">
      <h1 className="result-heading">Result</h1>
      <h2 className="result-subheading">{location.state.result.questionPaper.title}</h2>
      <h2 className="result-score">Score: {location.state.result.correctAnswers}</h2>
      <h2 className="result-attempted">Attempted: {location.state.result.attempted}</h2>
      <h2 className="result-total-marks">Total Marks: {location.state.result.totalMarks}</h2>
      <div className="result-buttons">
        <button className="result-print-button" onClick={handleClickPrint}>Print Result</button>
        <button className="result-logout-button" onClick={handleClick}>Logout</button>
      </div>
    </div>
  );
};

export default Result;
