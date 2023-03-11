import {useNavigate } from "react-router-dom";
import credential from "../../script/credential";
const Result = (props) => {

  const navigate = useNavigate();

  const handleClick = () => {
    window.print();
    credential.Logout();
    navigate('/');
  };
  return (
    <div>
      <center>
        <h1>{props.questionPaper.title}</h1>
        <h2>Marks Obtained :{props.result.correctAnswers}</h2>
        <h2>Total Marks :{props.result.totalMarks}</h2>
        <h2>Attempted : {props.result.attempted}</h2>
        <button type="Submit" onClick={handleClick}>
          Print Result
        </button>
      </center>
    </div>
  );
};

export default Result;
