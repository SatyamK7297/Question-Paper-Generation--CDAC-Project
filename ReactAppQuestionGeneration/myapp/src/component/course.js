import courseService from "../service/course_service";
import { useEffect, useState } from "react";
import React from "react";
import SubjectDetails from "./subject";


const CourseDetails = (props) => {
  const [courseId, setCourseId] = useState();
  const [course, SetCourse] = useState([]);
 

  const init = () => {
    courseService
      .getAllCourses()
      .then((response) => {
        SetCourse(response.data);
        
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    };

    useEffect(() => {
      init();
    },[]);

    const handleCourseChange = (e) => {
      setCourseId(e.target.value);
       props.onCourseIDChange(e.target.value);
      console.log("courseID "+courseId)
    };
      return (<div>
      <label htmlFor="course-select">Course : </label>
      <select id="course-select" value={courseId} onChange={handleCourseChange}>
        <option >
          Select a Course
        </option>
              {course.map((value, index) => (
          <option key={index} value={value.id}>
            {value.courseName}
          </option>
        ))}
      </select>
      
    </div>
  );
};


export default CourseDetails;
