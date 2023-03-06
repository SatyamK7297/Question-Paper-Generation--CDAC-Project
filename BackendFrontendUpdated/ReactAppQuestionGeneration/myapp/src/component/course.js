import courseService from "../service/course_service";
import { useEffect, useState } from "react";
import React from "react";
import SubjectDetails from "./subject";

const CourseDetails = () => {
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
  }, []);

  const handleCourseChange = (event) => {
    setCourseId(event.target.value);
  };

  return (
    <div>
      <label htmlFor="course-select" className="h3">Select Course</label>
      <select
        className="form-select form-select-lg mb-3"
        id="course-select"
        value={courseId}
        onChange={handleCourseChange}
      >
        <option value="">Select a Course</option>
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
