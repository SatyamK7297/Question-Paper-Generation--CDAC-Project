import React, { useEffect, useState } from "react";
import questionPaperService from "../service/questionPaper_service";
import Switch from "react-switch";
import QuestionListComponent from "./QuestionListComponent";
const QuestionPaperBySubject = (props) => {
  const [questionPapers, setQuestionPapers] = useState([]);

  const init = () => {
    questionPaperService
      .getAllQuestionPaperBySubjectForAdmin(props.subjectId)
      .then((response) => {
        console.log(response.data);
        setQuestionPapers(response.data);
        console.log(questionPapers);
      })
      .catch((error) => {
        console.log("Something went wrong in subject", error);
      });
  };

  useEffect(() => {
    init();
  }, [props.subjectId]);

  const [selectedQuestionPaperId, setSelectedQuestionPaperId] = useState(null);

  function handleQuestionPaperClick(questionPaperId) {
    setSelectedQuestionPaperId(
      questionPaperId === selectedQuestionPaperId ? null : questionPaperId
    );
  }

  const handleActiveChange = (isChecked, questionPaperId) => {
    const updatedQuestionPapers = questionPapers.map((qp) =>
      qp.id === questionPaperId ? { ...qp, active: isChecked } : qp
    );
    setQuestionPapers(updatedQuestionPapers);


    questionPaperService
      .isActive(questionPaperId)
      .then((response) => {})
      .catch((error) => {
        console.log(
          "Something went wrong while updating question paper",
          error
        );
      });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {questionPapers.map((questionPaper, index) => (
        <div
          key={questionPaper.id}
          style={{
            marginBottom: "30px",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <h2
            style={{
              fontSize: "28px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
            onClick={() => handleQuestionPaperClick(questionPaper.id)}
          >
            {index + 1}. {questionPaper.title}
          </h2>
          <p style={{ fontSize: "18px", marginBottom: "20px" }}>
            {questionPaper.description}
          </p>
          <p style={{ fontSize: "16px", marginBottom: "10px" }}>
            Number of Questions: {questionPaper.numberOfQuestions}
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                marginRight: "10px",
                marginBottom: "0px",
              }}
            >
              Active:
            </p>
            <Switch
              checked={questionPaper.active}
              onChange={(isChecked) =>
                handleActiveChange(isChecked, questionPaper.id)
              }
            />
          </div>
          {selectedQuestionPaperId === questionPaper.id && (
            <QuestionListComponent questions={questionPaper.questions} />
          )}
        </div>
      ))}
    </div>
  );
};

export default QuestionPaperBySubject;
