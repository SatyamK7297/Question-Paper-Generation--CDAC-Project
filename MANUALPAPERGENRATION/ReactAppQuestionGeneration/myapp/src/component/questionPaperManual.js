import React, { useState } from "react";
import questionPaperService from "../service/questionPaper_service";

const QuestionPaperManual = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [disableAddQuestion, setDisableAddQuestion] = useState(false);

  const MAX_QUESTIONS = numberOfQuestions;

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newQuestions = [...questions];
    newQuestions[index][name] = value;
    setQuestions(newQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        answer: "",
      },
    ]);
    if (questions.length + 1 === MAX_QUESTIONS) {
      setDisableAddQuestion(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (numberOfQuestions !== questions.length) {
      alert("Please add the mentioned number of questions.");
      return;
    }
    const questionPaper = {
      title,
      description,
      numberOfQuestions,
      questions,
    };

    questionPaperService
      .addQuestionPaperManually(props.subjectId, questionPaper)
      .then((response) => {
        console.log(response.data);
        alert("Question Paper Generated Successfully");
      })
      .catch((error) => {
        console.log("Something went wrong in subject", error);
      });
  };

  const handleAnswerChange = (e, index) => {
    const { value } = e.target;
    const newQuestions = [...questions];
    newQuestions[index]["answer"] = value;
    setQuestions(newQuestions);
  };

  return (
    <div>
      <h1>Question Paper Generator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Number of Questions:</label>
          <input
            type="number"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(parseInt(e.target.value))}
            min={5}
            max={40}
            required
          />
        </div>
        <button
          type="button"
          onClick={handleAddQuestion}
          disabled={disableAddQuestion}
        >
          Add Question
        </button>
        {questions.map((q, i) => (
          <div key={i}>
            <h3>Question {i + 1}</h3>
            <div>
              <label>Question:</label>
              <input
                type="text"
                name="question"
                value={q.question}
                onChange={(e) => handleInputChange(e, i)}
                required
              />
            </div>
            <div>
              <label>Option A:</label>
              <input
                type="text"
                name="a"
                value={q.a}
                onChange={(e) => handleInputChange(e, i)}
                required
              />
            </div>
            <div>
              <label>Option B:</label>
              <input
                type="text"
                name="b"
                value={q.b}
                onChange={(e) => handleInputChange(e, i)}
                required
              />
            </div>
            <div>
              <label>Option C:</label>
              <input
                type="text"
                name="c"
                value={q.c}
                onChange={(e) => handleInputChange(e, i)}
                required
              />
            </div>
            <div>
              <label>Option D:</label>
              <input
                type="text"
                name="d"
                value={q.d}
                onChange={(e) => handleInputChange(e, i)}
                required
              />
            </div>
            <div>
              <label>Answer:</label>
              <select
                name="answer"
                value={q.answer}
                onChange={(e) => handleAnswerChange(e, i)}
              >
                <option value="">--Select Answer--</option>
                <option value="A">Option A</option>
                <option value="B">Option B</option>
                <option value="C">Option C</option>
                <option value="D">Option D</option>
              </select>
            </div>
          </div>
        ))}
        <button type="submit">Generate Question Paper</button>
      </form>
    </div>
  );
};

export default QuestionPaperManual;
