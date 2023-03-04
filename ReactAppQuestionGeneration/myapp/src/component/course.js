import courseService from "../service/course_service";
import { useEffect, useState } from "react";
import React from "react";
import SubjectDetails from "./subject";

const CourseDetails = () => {
  const [courseId, setCourseId] = useState(1);
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
  }, []);

  const handleCourseChange = (e) => {
    setCourseId(e.target.value);
  };

  return (
    <div>
      <label htmlFor="course-select">Course : </label>
      <select id="course-select" value={courseId} onChange={handleCourseChange}>
        <option key={-1} value="">
          Select a Course
        </option>
        {course.map((value, index) => (
          <option key={index} value={value.id}>
            {value.courseName}
          </option>
        ))}
      </select>

      <SubjectDetails courseId={courseId} />
    </div>
  );
};

export default CourseDetails;
