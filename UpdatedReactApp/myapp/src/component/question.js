import { useEffect, useState } from "react";
import React from "react";
import questionService from "../service/question_service";
import { ReactDOM } from "react-dom";
const QuestionDetails = (props) => {
  const [questions, setQuestions] = useState([]);

  const init = () => {
    questionService
      .getAllQuestionBySubject(props.subjectId)
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, [props.subjectId]);

  return (
    <div key={props.subjectId}>
       {questions.map((value,index)=>(
      <div className="container" key={index}>
        <div className="card mt-5">
          <div className="card-header">
            <h2 className="text-center">{value.question}</h2>
          </div>
          <div className="card-body">
            <form>
              <p>Please choose the correct answer:</p>
              <div className="form-group">
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="option1"
                    name="answer"
                    value="a"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="option1">
                    {value.a}
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="option2"
                    name="answer"
                    value="b"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="option2">
                  {value.b}
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="option3"
                    name="answer"
                    value="c"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="option3">
                  {value.c}
                  </label>
                </div>
                <div className="custom-control custom-radio">
                  <input
                    type="radio"
                    id="option4"
                    name="answer"
                    value="d"
                    className="custom-control-input"
                  />
                  <label className="custom-control-label" for="option4">
                  {value.d}
                  </label>
                </div>
                <div>Answer : {value.answer}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default QuestionDetails;
