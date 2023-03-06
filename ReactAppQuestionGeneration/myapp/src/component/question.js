import questionService from "../service/question_service";
import { useEffect, useState } from "react";
import React from "react";
import questionCSS from "./question.module.css";

const QuestionDisplay = (props) => {
  const [questions, setQuestion] = useState([]);
  const [flag,setFlag] = useState(0);
  console.log("Subject id came in question " + props.subjectId);

  const init = () => {
    questionService
      .limitedQuestion(props.subjectId)
      .then((response) => {
        setQuestion(response.data);
        console.log("question array " + questions)
      })
      .catch((error) => {
        console.log("SomeThing went wrong in Question Display", error);
      })
  };

  useEffect(() => {
    init();
  }, [props.subjectId]);
    
    let renderList = questions.map((value)=>
    <li>{value.answer}</li>);
   const handleChange = (e) =>{
      setFlag(1);
   }
  return (
    <div key={props.subjectId}>
    {questions.map((value,index)=>(
   <div className="container" key={index} >
     <div className="card mt-5">
       <div className={questionCSS.question}>
         <h2 className={questionCSS.question}>{value.question}</h2>
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
                 className={questionCSS.option}
               />
               <label className={questionCSS.option} for="option1">
                 A. {value.a}
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
               <label className={questionCSS.option} for="option2">
               B. {value.b}
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
               <label className={questionCSS.option} for="option3">
               C. {value.c}
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
               <label className={questionCSS.option} for="option4">
               D. {value.d}
               </label>
               <br/>
               {/* <button onClick={changeStyle(index)}>Show Answer</button>  */}
             </div>
             {/* <div id={index} className={questionCSS.answer}>Answer : {value.answer}</div> */}
           </div>
         </form>
       </div>
     </div>
   </div>
   ))}
                   <button onClick={handleChange}>Show Answer</button>   
                   <ol>
                     {flag===1?renderList:""}
                   </ol>
                   

 </div>
  )
};
export default QuestionDisplay;