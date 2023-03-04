import subjectService from "../service/subject_service";
import { useEffect, useState } from "react";
import React from "react";

const SubjectDetails = (props) => {
  const [subjectId, setSubjectId] = useState(0);
  const [subject, setSubject] = useState([]);
  const init = () => {
    subjectService
      .getAllSubjectByCourse(props.courseId)
      .then((response) => {
        setSubject(response.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleSubjectChange = (e) => {
    setSubjectId(e.target.value);
  };

  return (
    <div>
      <label htmlFor="course-select">Subject : </label>
      <select
        id="course-select"
        value={subjectId}
        onChange={handleSubjectChange}
      >
        <option key={-1} value="">
          Select a Subject
        </option>
        {subject.map((value, index) => (
          <option key={index} value={value.id}>
            {value.subjectName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubjectDetails;
