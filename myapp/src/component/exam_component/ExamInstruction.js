import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import questionPaper_service from "../../service/questionPaper_service";
import credential from "../../script/credential";
import { useNavigate } from "react-router-dom";
import "./ExamInstruction.css";

const ExamInstruction = () => {
  const [questionPaper, setQuestionPaper] = useState();
  const { questionPaper_id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (credential.IsLoggedIn()) {
      questionPaper_service
        .getQuestionPaperDetails(questionPaper_id)
        .then((response) => {
          setQuestionPaper(response.data);
        })
        .catch((error) => {
          console.log(
            "Something went wrong in fetching question papers",
            error
          );
        });
    } else {
      navigate("/");
    }
  }, [questionPaper_id]);

  const handleStartQuiz = () => {
    navigate(`/main-exam/${questionPaper_id}`);
  };

  if (!questionPaper) {
    return <div>Loading...</div>;
  }

  return (
    <div className="exam-instruction-container">
      <h3 className="exam-instruction-title">
        Read the instructions carefully:
      </h3>
      <h2 className="exam-instruction-subtitle">{questionPaper.title}</h2>
      <p className="exam-instruction-description">
        {questionPaper.description}
      </p>
      <h2 className="exam-instruction-important-title">
        Important Instructions:
      </h2>
      <ul className="exam-instruction-important-list">
        <li>Quiz is only for practice purpose.</li>
        <li>
          You have to submit quiz within{" "}
          <b>{questionPaper.numberOfQuestions} minutes</b>.
        </li>
        <li>You can attempt quiz only once.</li>
        <li>
          There are <b>{questionPaper.numberOfQuestions}</b> questions in quiz.
        </li>
        <li>
          Each Question carries <b>1 mark</b>.
        </li>
        <li>No negative marking for wrong answers.</li>
        <li>All questions are of MCQ type.</li>
      </ul>

      <h2 className="exam-instruction-attempt-title">Attempting Quiz:</h2>
      <ul className="exam-instruction-attempt-list">
        <li>
          Click on the <b>Start Quiz</b> button to begin the quiz.
        </li>
        <li>
          The timer will start as soon as you click the <b>Start Quiz</b>{" "}
          button.
        </li>
        <li>You cannot resume the quiz if interrupted due to some reason.</li>
        <li>Scroll down to move to the next question.</li>
        <li>
          Click on the <b>Submit Quiz</b> button to complete the quiz.
        </li>
        <li>
          A PDF copy of the test report is automatically generated after the
          quiz is submitted.
        </li>
      </ul>

      <h2 className="exam-instruction-attempt-title">
        Get Ready to Attempt Exam:
      </h2>
      <div className="start-quiz-button-container">
        <button className="start-quiz-button" onClick={handleStartQuiz}>
          Start
        </button>
      </div>
    </div>
  );
};

export default ExamInstruction;
