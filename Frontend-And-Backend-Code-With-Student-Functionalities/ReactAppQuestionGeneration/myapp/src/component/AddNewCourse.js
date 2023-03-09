import React, { useState } from 'react';
import course_service from '../service/course_service';
function AddNewCourse(){
    
    const [courseName,setCourseName]=useState('');



   const addCourse=(e)=>{

    const courseEntity={
        courseName
    }
    course_service.addCourse(courseEntity)
    .then((response)=>{
        console.log("Course Added Successfully");
      }).catch((error)=>{
        alert(error.response.status);
        console.log("Something Went Wrong in Add Course");
      }) 
   }
    
    return(
        <div>
            <br/>
            <br/>
            
          <form>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='courseName'
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          placeholder='Enter Course Name'
        />
      </div>
      <br/>
      <div>
        <button onClick={(e) => addCourse(e)} className='btn btn-primary'>
          Save 
        </button>
      </div>
    </form>
        </div>
    )
}
export default AddNewCourse;