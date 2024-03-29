import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import questionService from "../../service/question_service";
import resultService from "../../service/result_service";
import credential from "../../script/credential";
import "./MainExam.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";


const MainExam = () => {
  const [questions, setQuestions] = useState([]);
  const { questionPaper_id } = useParams();
 // const[time, setTime] = useState();
  const navigate = useNavigate();

  //  const timer = () => {
  //    let timeLeft = time;
  //    let t = window.setInterval(()=>{
  //       if(timeLeft <= 0){
  //         autoSubmit();
  //         clearTimeout(t);
  //       }else{
  //         timeLeft--;
  //         setTime(timeLeft);
  //       }
  //    },1000)
  //  }

  useEffect(() => {
    if (credential.IsLoggedIn()) {
      questionService
        .getAllQuestionOfQuestionPaperForUser(questionPaper_id)
        .then((response) => {
          setQuestions(response.data);
        //  setTime(response.data.length*60)
        })
        .catch((error) => {
          console.log(
            "Something went wrong in fetching question papers",
            error
          );
        });
       
        //timer();
    
    } else {
      navigate("/");
    }
  }, [questionPaper_id, navigate]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [markedForReview, setMarkedForReview] = useState([]);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    setSelectedAnswer(responses[currentQuestion] || "");
  }, [currentQuestion, responses]);

  const handleAnswerOptionClick = (answerOption) => {
    setSelectedAnswer(answerOption);
    setResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      newResponses[currentQuestion] = answerOption;
      return newResponses;
    });
  };

  const handleClearResponse = () => {
    setSelectedAnswer("");
    setResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      newResponses[currentQuestion] = "";
      return newResponses;
    });
  };

  const handleMarkForReview = () => {
    setMarkedForReview((prevMarkedForReview) => {
      const newMarkedForReview = [...prevMarkedForReview];
      if (!newMarkedForReview.includes(currentQuestion)) {
        newMarkedForReview.push(currentQuestion);
      }
      return newMarkedForReview;
    });
  };

  const handleNextButtonClick = () => {
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion + 1);
    setSelectedAnswer("");
  };

  const handlePrevButtonClick = () => {
    setCurrentQuestion((prevCurrentQuestion) => prevCurrentQuestion - 1);
  };

  const handleSubmitButtonClick = () => {
    const con = window.confirm("Do you want submit the responses"); 
   if(con){
    questions.map((q, i) => {
      q.answerSubmitted = responses[i];
    });

    resultService
      .evalQuiz(questionPaper_id, sessionStorage.key(0), questions)
      .then((response) => {
        navigate("/recent-result", {
          state: {

              result:response.data
          },
      });
      })
      .catch((error) => {
        console.log("Something went wrong ", error);
      });
  }else{

  }
}
const autoSubmit = () => {

  questions.map((q, i) => {
    q.answerSubmitted = responses[i];
  });

  resultService
    .evalQuiz(questionPaper_id, sessionStorage.key(0), questions)
    .then((response) => {
      navigate("/recent-result", {
        state: {
            result:response.data
        },
    });
    })
    .catch((error) => {
      console.log("Something went wrong", error);
    });

}

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const question = questions[currentQuestion];

  const isOptionSelected = (option) => {
    return selectedAnswer === option;
  };

  const isOptionMarkedForReview = (option) => {
    return (
      markedForReview.includes(currentQuestion) && selectedAnswer !== option
    );
  };

  return (
    <div className="main-exam-container">
      {/* <h1>{time}</h1> */}
      <div className="question-container">
        <div className="question-header">
          <h2>Question {currentQuestion + 1}</h2>
          <div className="question-navigation">
            <button
              className="prev-button"
              onClick={handlePrevButtonClick}
              disabled={currentQuestion === 0}
            >
              <FontAwesomeIcon icon={faArrowLeft} />
              <span>Prev</span>
            </button>
            <button
              className="next-button"
              onClick={handleNextButtonClick}
              disabled={currentQuestion === questions.length - 1}
            >
              <span>Next</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className="question-body">
          <p className="question-text">{question.question}</p>
          <div className="answer-options">
            <div className="answer-option">
              <input
                type="radio"
                id="option-a"
                name="answer-option"
                value="A"
                checked={selectedAnswer === "A"}
                onChange={() => handleAnswerOptionClick("A")}
              />
              <label htmlFor="option-a">{question.a}</label>
            </div>
            <div className="answer-option">
              <input
                type="radio"
                id="option-b"
                name="answer-option"
                value="B"
                checked={selectedAnswer === "B"}
                onChange={() => handleAnswerOptionClick("B")}
              />
              <label htmlFor="option-b">{question.b}</label>
            </div>
            <div className="answer-option">
              <input
                type="radio"
                id="option-c"
                name="answer-option"
                value="C"
                checked={selectedAnswer === "C"}
                onChange={() => handleAnswerOptionClick("C")}
              />
              <label htmlFor="option-c">{question.c}</label>
            </div>
            <div className="answer-option">
              <input
                type="radio"
                id="option-d"
                name="answer-option"
                value="D"
                checked={selectedAnswer === "D"}
                onChange={() => handleAnswerOptionClick("D")}
              />
              <label htmlFor="option-d">{question.d}</label>
            </div>
          </div>
        </div>
        <div className="question-footer">
          <div className="response-actions">
            <button className="clear-response" onClick={handleClearResponse}>
              Clear Response
            </button>
            <button className="mark-review" onClick={handleMarkForReview}>
              Mark for Review
            </button>
          </div>
          <div className="question-info">
            <p>
              <span>{markedForReview.length}</span> marked for review
            </p>
            <p>
              <span>{responses.filter(Boolean).length}</span> questions answered
            </p>
            <p>
              <span>{questions.length - responses.filter(Boolean).length}</span>{" "}
              questions left
            </p>
          </div>
        </div>
      </div>
      <div className="exam-footer">
        <button className="submit-button" onClick={handleSubmitButtonClick}>
          Submit Exam
        </button>
      </div>

    </div>
  );
};

export default MainExam;
