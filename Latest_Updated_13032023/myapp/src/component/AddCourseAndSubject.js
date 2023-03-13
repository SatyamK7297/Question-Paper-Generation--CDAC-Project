import React, { useState } from 'react';
import AddNewCourse from './AddNewCourse';
import AddSubjectToCourse from './AddSubjectToCourse';

function AddCourseAndSubject(){
   const [renderAddNewCourse,setRenderAddNewCourse]=useState(false);
   const [renderAddNewSubject,setRenderAddNewSubject]=useState(false);

  const HandleAddNewCourse=()=>{
    setRenderAddNewCourse(true);
    setRenderAddNewSubject(false);
  }
  const HandleAddNewSubject=()=>{
    setRenderAddNewSubject(true);
    setRenderAddNewCourse(false);
  }
   

    return(<div>
        <button onClick={() => HandleAddNewCourse()} className='btn btn-primary'>Add New Course</button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={() => HandleAddNewSubject()} className='btn btn-primary'>Add New Subject</button> 
        <br/>
         {renderAddNewCourse && <AddNewCourse/>}
         <br/>
         {renderAddNewSubject && <AddSubjectToCourse/>}
         

    </div>)
}
export default AddCourseAndSubject;