import React, { useState } from "react";
import questionPaperService from "../service/questionPaper_service";
function QuestionPaper(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfQuestions, setnumberOfQuestions] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
      
    const questionPaper = {
      title,
      description,
      numberOfQuestions,
    };
    questionPaperService
      .addQuestionPaperAuto(props.subjectId, questionPaper)
      .then((response) => {
        console.log(response.data);
        alert("Question Paper Generated Successfully");
      })
      .catch((error) => {
        console.log("Something went wrong in subject", error);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <label htmlFor="title-input" style={{ marginBottom: "5px" }}>
        Question Paper Title:
      </label>
      <input
        id="title-input"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ccc",
        }}
        required
      />

      <label htmlFor="description-input" style={{ marginBottom: "5px" }}>
        Question Paper Description:
      </label>
      <textarea
        id="description-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ccc",
        }}
        required
      />

      <label htmlFor="num-questions-input" style={{ marginBottom: "5px" }}>
        Number of Questions:
      </label>
      <input
        id="num-questions-input"
        type="number"
        value={numberOfQuestions}
        onChange={(e) => setnumberOfQuestions(parseInt(e.target.value))}
        style={{
          marginBottom: "20px",
          padding: "10px",
          border: "1px solid #ccc",
        }}
        min={5}
        max={40}
        required
      />

      <button
        type="submit"
        style={{
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </form>
  );
}

export default QuestionPaper;
