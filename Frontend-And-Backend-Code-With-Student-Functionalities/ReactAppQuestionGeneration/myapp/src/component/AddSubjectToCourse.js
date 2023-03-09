import React from 'react';
import CourseDetails from './course';
import {useState} from 'react';
import subject_service from '../service/subject_service';
function AddSubjectToCourse(){
    const [courseId, setCourseId] = useState();
    const [subjectName,setSubjectName] = useState();

    let HandleCourseId=(newCourseID)=>{
        console.log("Course ID came From Course in AddSubjectToCourse "+newCourseID);
        setCourseId(newCourseID);
        
    }

    const addSubject =(e)=>{
        const subjectEntity={
          subjectName
        }
        subject_service.addSubject(courseId,subjectEntity)
        .then((response)=>{
            console.log("Subject Added Successfully");
          }).catch((error)=>{
            alert(error.response.status);
            console.log("Something Went Wrong in Add Subject");
          }) 
    }
    return(
        <div>
         <span>Select Course : </span> <CourseDetails  onCourseIDChange={HandleCourseId} />
         <br/>
         <form>
      <div className='form-group'>
        <input
          type='text'
          className='form-control col-4'
          id='subjectName'
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          placeholder='Enter Subject Name'
        />
      </div>
      <br/>
      <div>
        <button onClick={(e) => addSubject(e)} className='btn btn-primary'>
          Add Subject 
        </button>
      </div>
    </form>

        </div>
    )
}
export default AddSubjectToCourse;