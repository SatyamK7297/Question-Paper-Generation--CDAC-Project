import React from 'react';
import {useState} from 'react';
import question_service from '../service/question_service';
import { Link } from 'react-router-dom';
function AddQuestion(){
   const [question,SetQuestion]= useState('');
   const[a,SetA]=useState('');
   const[b,SetB]=useState('');
   const[c,SetC]=useState('');
   const[d,SetD]=useState('');
   const[answer,SetAnswer]=useState('');
 const saveQuestion =(e)=>{

    const questionEntity={
        question,
        a,
        b,
        c,
        d,
        answer
       }

     question_service.addQuestion(questionEntity,1)
                      .then((response)=>{
                        console.log("Question Added Successfully");
                      }).catch((error)=>{
                        alert(error.response.status);
                        console.log("Something Went Wrong in Add Question");
                      })  
 }
   

    return(<div className='container'>
    <h3>Add Question</h3>
    <hr />
    <form>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='question'
          value={question}
          onChange={(e) => SetQuestion(e.target.value)}
          placeholder='Enter Question'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='a'
          value={a}
          onChange={(e) => SetA(e.target.value)}
          placeholder='Enter Option A'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='b'
          value={b}
          onChange={(e) => SetB(e.target.value)}
          placeholder='Enter Option B'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='c'
          value={c}
          onChange={(e) => SetC(e.target.value)}
          placeholder='Enter Option C'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='d'
          value={d}
          onChange={(e) => SetD(e.target.value)}
          placeholder='Enter Option D'
        />
      </div>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='answer'
          value={answer}
          onChange={(e) => SetAnswer(e.target.value)}
          placeholder='Enter Answer'
        />
      </div>
      
      <div>
        <button onClick={(e) => saveQuestion(e)} className='btn btn-primary'>
          Save 
        </button>
      </div>
    </form>
    <hr />
    <Link to='/'>Back to Home</Link>
  </div>


    
       
    )
}
export default AddQuestion;
