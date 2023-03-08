import React from "react";
function QuestionListComponent(props) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ fontSize: "22px", marginBottom: "10px" }}>Questions:</h3>
      <ul style={{ fontSize: "16px", paddingLeft: "20px" }}>
        {props.questions.map((question) => (
          <li key={question.id} style={{ marginBottom: "10px" }}>
            <p style={{ fontSize: "18px", marginBottom: "5px" }}>
              {question.question}
            </p>
            <ul style={{ paddingLeft: "20px" }}>
              <li style={{ fontSize: "16px", marginBottom: "5px" }}>
                {question.a}
              </li>
              <li style={{ fontSize: "16px", marginBottom: "5px" }}>
                {question.b}
              </li>
              <li style={{ fontSize: "16px", marginBottom: "5px" }}>
                {question.c}
              </li>
              <li style={{ fontSize: "16px", marginBottom: "5px" }}>
                {question.d}
              </li>
            </ul>
            <p style={{ fontSize: "18px", marginBottom: "5px" }}>
             ANSWER :  {question.answer}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QuestionListComponent;
