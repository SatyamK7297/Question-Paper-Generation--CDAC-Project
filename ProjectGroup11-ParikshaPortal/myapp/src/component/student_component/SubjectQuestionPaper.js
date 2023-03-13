import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import questionPaper_service from "../../service/questionPaper_service";
import "./SubjectQuestionPaper.css";
import credential from "../../script/credential";
import { useNavigate } from "react-router-dom";
const SubjectQuestionPaper = () => {
  const [questionPapers, setQuestionPapers] = useState([]);
  const { subjectId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    
    let user_id = -1;
    if ((user_id = credential.IsLoggedIn())) {
    questionPaper_service
      .getAllQuestionPaperBySubjectForUser(subjectId,parseInt(user_id))
      .then((response) => {
        setQuestionPapers(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong in fetching question papers", error);
      });
    }else {
      navigate("/");
    }
  }, [subjectId]);

  return (
    <div className="question-papers">
      <h2>Attempt Exam</h2>
      {questionPapers.map((questionPaper) => (
        <div key={questionPaper.id} className="question-paper">
          <h3>{questionPaper.title}</h3>
          <p>{questionPaper.description}</p>
          <p>Number of Questions: {questionPaper.numberOfQuestions}</p>
          <div className="question-paper-hover">
            <a href={`/attempt-exam/${questionPaper.id}`}>Attempt Exam</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubjectQuestionPaper;
