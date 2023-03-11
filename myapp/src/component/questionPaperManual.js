import React, { useState } from "react";

const QuestionPaperManual = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(0);
  const [questions, setQuestions] = useState([]);

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   // console.log();
    // You can perform any actions with the generated question paper here
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
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label>Number of Questions:</label>
          <input
            type="number"
            value={numberOfQuestions}
            onChange={(e) => setNumberOfQuestions(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleAddQuestion}>
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
              />
            </div>
            <div>
              <label>Option A:</label>
              <input
                type="text"
                name="a"
                value={q.a}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div>
              <label>Option B:</label>
              <input
                type="text"
                name="b"
                value={q.b}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div>
              <label>Option C:</label>
              <input
                type="text"
                name="c"
                value={q.c}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div>
              <label>Option D:</label>
              <input
                type="text"
                name="d"
                value={q.d}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
            <div>
              <label>Answer:</label>
              <input
                type="text"
                name="answer"
                value={q.answer}
                onChange={(e) => handleInputChange(e, i)}
              />
            </div>
          </div>
        ))}
        <button type="submit">Generate Question Paper</button>
      </form>
    </div>
  );
};

export default QuestionPaperManual;
